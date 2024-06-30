import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }: JobProps) => {
  return (
    <div
      className={`${bgClass} flex aspect-square flex-col items-center justify-center rounded-lg border-2 border-slate-400 p-4`}
    >
      {icon}
      <p className="pt-2">{title}</p>
    </div>
  );
};
