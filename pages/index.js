import { useEffect, useState } from "react";
import CampaignsTable from "../components/CampaignsTable";

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      let url = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
      url += "/campaigns";
      if (status) url += `?status=${status}`;
      const res = await fetch(url);
      const data = await res.json();
      setCampaigns(data);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchCampaigns();
}, [status]);


  return (
    <div className="app-container">
      <h1 className="app-heading">Campaign Analytics Dashboard</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 text-sm">
          Showing {status || "All"} Campaigns
        </p>
        <select
          className="filter-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Campaigns</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-400 border-t-transparent"></div>
        </div>
      ) : campaigns.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No campaigns found.
        </div>
      ) : (
        <CampaignsTable campaigns={campaigns} />
      )}
    </div>
  );
}
