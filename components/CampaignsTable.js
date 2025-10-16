export default function CampaignsTable({ campaigns }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg">
      <table className="campaign-table">
        <thead>
          <tr>
            <th className="text-left">Campaign Name</th>
            <th className="text-left">Status</th>
            <th className="text-right">Clicks</th>
            <th className="text-right">Cost</th>
            <th className="text-right">Impressions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, i) => (
            <tr
              key={c.id}
              className={`${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50 transition-colors duration-200`}
            >
              <td className="py-3 px-6 font-medium">{c.name}</td>
              <td className="py-3 px-6">
                <span
                  className={
                    c.status === "Active" ? "status-active" : "status-paused"
                  }
                >
                  {c.status}
                </span>
              </td>
              <td className="py-3 px-6 text-right">{c.clicks}</td>
              <td className="py-3 px-6 text-right">${c.cost.toFixed(2)}</td>
              <td className="py-3 px-6 text-right">{c.impressions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
