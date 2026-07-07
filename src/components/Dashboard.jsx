import { FolderKanban, Cloud, MonitorCog, Activity } from "lucide-react";
import { projects } from "../data/projects";

function Dashboard() {
  return (
    <section className="dashboard">
      <h2>Engineering Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <FolderKanban size={34} />
          <h3>Active Projects</h3>
          <span>{projects.length}</span>
        </div>

        <div className="dashboard-card">
          <Cloud size={34} />
          <h3>AWS Focus</h3>
          <span>In Progress</span>
        </div>

        <div className="dashboard-card">
          <MonitorCog size={34} />
          <h3>Current Role</h3>
          <span>WGU Student</span>
        </div>

        <div className="dashboard-card">
          <Activity size={34} />
          <h3>Status</h3>
          <span>🟢 Building</span>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
