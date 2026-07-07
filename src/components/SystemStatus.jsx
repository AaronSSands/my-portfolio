import { Activity, Cloud, Cpu, GraduationCap } from "lucide-react";

function SystemStatus() {
  return (
    <section className="system-status-bar">
      <div className="status-item">
        <Activity size={16} />
        <span>System Online</span>
      </div>

      <div className="status-item">
        <Cloud size={16} />
        <span>AWS Learning</span>
      </div>

      <div className="status-item">
        <GraduationCap size={16} />
        <span>WGU Cloud & Network Engineering</span>
      </div>

      <div className="status-item">
        <Cpu size={16} />
        <span>Current Mission: Build. Learn. Improve.</span>
      </div>
    </section>
  );
}

export default SystemStatus;
