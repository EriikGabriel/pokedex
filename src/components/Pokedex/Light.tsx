import { cn } from "@utils/cn";

interface LightProps {
  className?: string;
}

export function Light({ className }: LightProps) {
  return (
    <div
      className={cn(
        `absolute rounded-full border-[0.3px] border-black before:absolute before:bottom-0 before:left-2/4 before:h-[90%] before:w-[90%] before:rounded-[100%] before:bg-[rgba(0,0,0,0.2)] before:content-[''] before:-translate-x-2/4 after:absolute after:left-[10%] after:top-[10%] after:h-3/5 after:w-3/5 after:rounded-full after:content-['']`,
        className,
      )}
    >
      <div className="absolute left-[20%] top-[20%] z-[1] h-[15%] w-[15%] rounded-full bg-[rgba(255,255,255,0.6)]" />
    </div>
  );
}
