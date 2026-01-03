from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Enable CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]


class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None
    targetHandle: str = None


class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.post("/pipelines/parse")
async def parse_pipeline(request: PipelineRequest):
    """
    Parse pipeline and return node count, edge count, and DAG status.
    """
    nodes = request.nodes
    edges = request.edges
    
    # Calculate number of nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Check if the graph is a DAG (Directed Acyclic Graph)
    # Create a directed graph using networkx
    G = nx.DiGraph()
    
    # Add all nodes to the graph
    for node in nodes:
        G.add_node(node.id)
    
    # Add all edges to the graph
    for edge in edges:
        G.add_edge(edge.source, edge.target)
    
    # Check if the graph is acyclic (DAG)
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }


@app.get("/")
async def root():
    return {"message": "VectorShift Pipeline Backend API"}

