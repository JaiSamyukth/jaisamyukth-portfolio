

interface BlueprintTooltipProps {
  node: {
    title: string;
    subtitle: string;
    href?: string;
  };
  position: { x: number; y: number };
}

export function BlueprintTooltip({ node, position }: BlueprintTooltipProps) {
  return (
    <div
      className="fixed z-50 bg-parchment-darker border border-dust-dark rounded-lg p-4 max-w-xs shadow-lg pointer-events-none"
      style={{
        left: position.x + 10,
        top: position.y - 10,
        transform: 'translateY(-100%)',
      }}
      role="tooltip"
      aria-live="polite"
    >
      <h3 className="text-sm font-semibold text-glow-gold mb-1">
        {node.title}
      </h3>
      <p className="text-xs text-dust-light leading-relaxed">
        {node.subtitle}
      </p>
      {node.href && node.href !== '#' && (
        <p className="text-xs text-glow-blue mt-2 opacity-75">
          Click to visit →
        </p>
      )}
    </div>
  );
}
