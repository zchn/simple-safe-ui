import { useCallback } from "react";
import ReactFlow, {
    Background,
    Connection,
    Controls,
    Edge,
    MiniMap,
    Node,
    Position,
    addEdge,
    useEdgesState,
    useNodesState
} from "reactflow";

import "reactflow/dist/style.css";



const initialNodes: Node[] = [
    {
        id: "txBuilderJson",
        type: "input",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "TxBuilderJson" },
        position: { x: 0, y: 0 }
    },
    {
        id: "eip712Domain",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "EIP712Domain" },
        position: { x: 100, y: 0 }
    },
    {
        id: "callData",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Left,
        data: { label: "CallData" },
        position: { x: 100, y: 50 }
    },
    {
        id: "dataHash",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Top,
        data: { label: "DataHash" },
        position: { x: 100, y: 100 }
    },
    {
        id: "miscParams",
        type: "input",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "MiscParams" },
        position: { x: 100, y: 150 }
    },
    {
        id: "x1901",
        type: "input",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "0x1901" },
        position: { x: 200, y: 0 }
    },
    {
        id: "domainSeparator",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "DomainSeparator" },
        position: { x: 200, y: 50 }
    },
    {
        id: "msgHash",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "MsgHash" },
        position: { x: 200, y: 100 }
    },
    {
        id: "txHash",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "TxHash" },
        position: { x: 200, y: 150 }
    },
    {
        id: "eip712Sign",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "EIP 712 Sign" },
        position: { x: 300, y: 0 }
    },
    {
        id: "personalSign",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "Personal Sign" },
        position: { x: 300, y: 50 }
    },
    {
        id: "approveHash",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "ApproveHash" },
        position: { x: 300, y: 100 }
    },
    {
        id: "contractSign",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: { label: "Contract Sign" },
        position: { x: 300, y: 150 }
    },
    {
        id: "executeTx",
        style: {
            width: 80,
            fontSize: "8px"
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        type: "output",
        data: { label: "ExecuteTx" },
        position: { x: 400, y: 0 }
    }
];

const initialEdges: Edge[] = [
    { id: "e1.1", source: "txBuilderJson",
      target: "callData", animated: true },
    { id: "e1.2", source: "txBuilderJson",
      target: "eip712Domain", animated: true },
    { id: "e2", source: "callData",
      target: "dataHash" },
    { id: "e3", source: "dataHash",
      target: "msgHash" },
    { id: "e4", source: "miscParams",
      target: "msgHash" },
    { id: "e5", source: "eip712Domain",
      target: "domainSeparator" },
    { id: "e6", source: "x1901",
      target: "eip712Sign" },
    { id: "e7", source: "domainSeparator",
      target: "eip712Sign" },
    { id: "e8", source: "msgHash",
      target: "eip712Sign" },
    { id: "e9", source: "txHash",
      target: "personalSign" },
    { id: "e10", source: "txHash",
      target: "approveHash" },
    { id: "e11", source: "txHash",
      target: "contractSign" },
    { id: "e12", source: "eip712Sign",
      target: "executeTx" },
    { id: "e13", source: "personalSign",
      target: "executeTx" },
    { id: "e14", source: "approveHash",
      target: "executeTx" },
    { id: "e15", source: "contractSign",
      target: "executeTx" }
];

const BasicFlow = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
        [setEdges]
    );

    return (
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
            >
            <Controls />
            <MiniMap />
            <Background />
        </ReactFlow>
    );
};

export default BasicFlow;
