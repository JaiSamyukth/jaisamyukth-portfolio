import { useRef, useLayoutEffect, useState } from 'react';
import { gsap, CINEMATIC_EASES } from '../../lib/gsap';
import { useAppContext } from '../../contexts/AppContext';
import { COPY } from '../../content';
import { BlueprintTooltip } from './BlueprintTooltip';

type NodeId = 'idea' | 'design' | 'development' | 'deployment' | 'product';

interface NodePosition {
  x: number;
  y: number;
}

const NODE_POSITIONS: Record<NodeId, NodePosition> = {
  idea: { x: 120, y: 150 },
  design: { x: 250, y: 150 },
  development: { x: 400, y: 150 },
  deployment: { x: 550, y: 150 },
  product: { x: 680, y: 150 },
};

export function BlueprintSVG() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeId | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const { playSound, reducedMotion } = useAppContext();

  useLayoutEffect(() => {
    if (!svgRef.current || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Cinematic blueprint reveal sequence
      const tl = gsap.timeline({ delay: 0.5 });

      // 1. Grid appears first
      tl.fromTo('.grid-pattern',
        { opacity: 0 },
        { opacity: 0.3, duration: 1, ease: CINEMATIC_EASES.smooth }
      );

      // 2. Connection lines draw in sequence
      const connections = svgRef.current?.querySelectorAll('.connection-line');
      connections?.forEach((line, i) => {
        gsap.set(line, { strokeDasharray: '100%', strokeDashoffset: '100%' });
        tl.to(line, {
          strokeDashoffset: '0%',
          duration: 1.5,
          ease: CINEMATIC_EASES.smooth,
        }, i * 0.3);
      });

      // 3. Nodes appear with dramatic effect
      const nodes = svgRef.current?.querySelectorAll('.blueprint-node');
      nodes?.forEach((node, i) => {
        gsap.set(node, { scale: 0, opacity: 0, rotation: 180 });
        tl.to(node, {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: CINEMATIC_EASES.elastic,
        }, 1 + i * 0.2);
      });

      // 4. Minimal, professional animations
      tl.add(() => {
        // Very subtle node hover effect only
        nodes?.forEach((node) => {
          gsap.set(node, {
            transformOrigin: 'center'
          });
        });
      });

    }, svgRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleNodeClick = (nodeId: NodeId) => {
    const node = COPY.blueprint.nodes[nodeId];
    if (node.href && node.href !== '#') {
      window.open(node.href, '_blank');
    }
    playSound('seal');
  };

  const handleNodeHover = (nodeId: NodeId, event: React.MouseEvent) => {
    setHoveredNode(nodeId);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 800 300"
        className="w-full h-auto"
        role="img"
        aria-label="Process diagram showing the development methodology"
      >
        {/* Enhanced definitions */}
        <defs>
          {/* Parchment grid pattern */}
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="rgba(139, 69, 19, 0.15)"
              strokeWidth="0.5"
              className="grid-pattern"
              strokeDasharray="2,2"
            />
          </pattern>

          {/* Parchment-style filters */}
          <filter id="parchment-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Ink blot effect */}
          <filter id="ink-blot" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="1" result="offset"/>
            <feMerge>
              <feMergeNode in="offset"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Parchment gradient definitions */}
          <radialGradient id="nodeGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F4E4BC" />
            <stop offset="50%" stopColor="#E2C275" />
            <stop offset="100%" stopColor="#C6A779" />
          </radialGradient>

          <radialGradient id="activeNodeGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8B6914" />
          </radialGradient>

          {/* Ink gradient for lines */}
          <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>
        </defs>

        {/* Background with grid */}
        <rect width="100%" height="100%" fill="url(#grid)" className="grid-pattern" />

        {/* Clean connection lines */}
        {Object.keys(NODE_POSITIONS).slice(0, -1).map((nodeId, i) => {
          const currentNode = NODE_POSITIONS[nodeId as NodeId];
          const nextNodeId = Object.keys(NODE_POSITIONS)[i + 1] as NodeId;
          const nextNode = NODE_POSITIONS[nextNodeId];

          return (
            <g key={`connection-${nodeId}-${nextNodeId}`}>
              {/* Arrow line */}
              <line
                className="connection-line"
                x1={currentNode.x + 24}
                y1={currentNode.y}
                x2={nextNode.x - 24}
                y2={nextNode.y}
                stroke="#8B4513"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Arrow head */}
              <polygon
                points={`${nextNode.x - 24},${nextNode.y} ${nextNode.x - 32},${nextNode.y - 4} ${nextNode.x - 32},${nextNode.y + 4}`}
                fill="#8B4513"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* Clean, professional nodes */}
        {Object.entries(NODE_POSITIONS).map(([nodeId, position]) => {
          const node = COPY.blueprint.nodes[nodeId as NodeId];
          const isHovered = hoveredNode === nodeId;

          return (
            <g key={nodeId}>
              {/* Main node - clean circle */}
              <circle
                className="blueprint-node"
                cx={position.x}
                cy={position.y}
                r={isHovered ? "28" : "24"}
                fill={isHovered ? "#D4AF37" : "#E2C275"}
                stroke="#8B4513"
                strokeWidth="2"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleNodeClick(nodeId as NodeId)}
                onMouseEnter={(e) => handleNodeHover(nodeId as NodeId, e)}
                onMouseLeave={handleNodeLeave}
                role="button"
                tabIndex={0}
                aria-label={`${node.title}: ${node.subtitle}`}
              />

              {/* Node number */}
              <text
                x={position.x}
                y={position.y + 6}
                textAnchor="middle"
                className="text-lg font-bold"
                fill="#8B4513"
                pointerEvents="none"
              >
                {Object.keys(NODE_POSITIONS).indexOf(nodeId) + 1}
              </text>

              {/* Node label */}
              <text
                x={position.x}
                y={position.y + 45}
                textAnchor="middle"
                className="text-sm font-serif font-medium"
                fill="#8B4513"
                pointerEvents="none"
              >
                {node.title}
              </text>
            </g>
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1B263B" />
            <stop offset="100%" stopColor="#0D1B2A" />
          </radialGradient>
        </defs>
      </svg>

      {/* Tooltip */}
      {hoveredNode && (
        <BlueprintTooltip
          node={COPY.blueprint.nodes[hoveredNode]}
          position={tooltipPosition}
        />
      )}
    </div>
  );
}
