import React from "react";
import ReactECharts from "echarts-for-react";
import metricData from "../data/metricData.json";

const MetricCards = ({ data = metricData }) => {
  const {
    "Card On Duty": onDutyData,
    "Card Attendance": attendanceData,
    "Card Feed Activity": feedActivityData,
    "Card Patrol": patrolData,
    "Card Non Schedule": nonScheduleData,
    "Card Non Geofence": nonGeofenceData,
  } = data;

  // Helper function to create donut chart option
  const createDonutOption = (active, total, activeLabel) => {
    return {
      tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
      series: [
        {
          type: "pie",
          radius: ["60%", "80%"],
          label: { show: false },
          data: [
            { value: active, name: activeLabel },
            { value: total - active, name: "Remaining" },
          ],
          color: ["#5470c6", "#fac858"],
        },
      ],
    };
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-6">
      {/*Today On Duty */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>On Duty
        </h3>
        <div className="relative">
          <ReactECharts
            option={createDonutOption(
              onDutyData["On Duty"],
              onDutyData.Total,
              "On Duty"
            )}
            style={{ height: "150px" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-400">
              {onDutyData["On Duty"]}/{onDutyData.Total}
            </p>
          </div>
        </div>
      </div>

      {/*Today Attendance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>Attendance
        </h3>
        <div className="relative">
          <ReactECharts
            option={createDonutOption(
              attendanceData.Attend,
              attendanceData.Total,
              "Attend"
            )}
            style={{ height: "150px" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-sm font-bold text-gray-800 dark:text-white">
              {((attendanceData.Attend / attendanceData.Total) * 100).toFixed(
                1
              )}
              %
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {attendanceData.Attend}/{attendanceData.Total} Person
            </p>
          </div>
        </div>
      </div>

      {/*Feed Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>Feed / Activity
        </h3>
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
            {feedActivityData["Total feed"]}
          </div>
          <div className="text-sm uppercase tracking-wide text-[#999]">
            of {feedActivityData["Total person"]} Person
          </div>
        </div>
      </div>

      {/* Today Patrol */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>Patrol
        </h3>
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
            {patrolData["Total Patrol"]}
          </div>
          <div className="text-sm uppercase tracking-wide text-[#999]">
            Person
          </div>
        </div>
      </div>

      {/* Today Non Schedule */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>Non Schedule
        </h3>
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
            {nonScheduleData["Total person"]}
          </div>
          <div className="text-sm uppercase tracking-wide text-[#999]">
            Person
          </div>
        </div>
      </div>

      {/*Today Non Geofence */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600">Today </span>Non Geofence
        </h3>
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
            {nonGeofenceData["Total person"]}
          </div>
          <div className="text-sm uppercase tracking-wide text-[#999]">
            Person
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;
