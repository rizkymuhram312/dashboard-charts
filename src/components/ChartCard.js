import { useState, useEffect } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import attendanceData from "../data/attendanceData.json";

export default function DashboardAttendance() {
  const data = attendanceData;
  const dailyData = data["Attendance Daily"];
  const shiftData = data["Attendance Per Shift"];

  // Get dates
  const dates = Object.keys(dailyData.Attend).map((date) => {
    return date;
  });

  //attendance data
  const attendValues = Object.values(dailyData.Attend);
  const unattendValues = Object.values(dailyData.Unattend);
  const nonScheduleValues = Object.values(dailyData["Non Schedule"]);
  const accumulationAttendValues = Object.values(
    dailyData["Accumulation Attend"]
  );
  const accumulationUnattendValues = Object.values(
    dailyData["Accumulation Un-attend"]
  );
  const accumulationNonScheduleValues = Object.values(
    dailyData["Accumulation Non Schedule"]
  );

  //shift data
  const shiftNames = Object.keys(shiftData.Attend);
  const shiftAttendValues = Object.values(shiftData.Attend);
  const shiftUnattendValues = Object.values(shiftData["Un-attend"]);
  const shiftLateCheckinValues = Object.values(shiftData["Late Check-in"]);
  const shiftNonScheduleValues = Object.values(shiftData["Non Schedule"]);
  const shiftTotalAttendValues = Object.values(shiftData["Total Attend"]);
  const shiftTotalUnattendValues = Object.values(shiftData["Total Un-attend"]);

  // Daily attendance chart options
  const dailyAttendanceOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter: function (params) {
        let result = `Day: ${params[0].axisValue}<br/>`;
        params.forEach((param) => {
          result += `${param.seriesName}: ${param.value}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: [
        "Attend",
        "Un-attend",
        "Non Schedule",
        "Accumulation Attend",
        "Accumulation Un-attend",
        "Accumulation Non Schedule",
      ],
      bottom: 0,
      textStyle: {
        fontSize: 11,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "12%",
      top: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: dates,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          rotate: 45,
          fontSize: 10,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Daily Count",
        position: "left",
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "Accumulation",
        position: "right",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "Attend",
        type: "bar",
        data: attendValues,
        itemStyle: { color: "#5470c6" },
        barMaxWidth: 30,
      },
      {
        name: "Un-attend",
        type: "bar",
        data: unattendValues,
        itemStyle: { color: "#fac858" },
        barMaxWidth: 30,
      },
      {
        name: "Non Schedule",
        type: "bar",
        data: nonScheduleValues,
        itemStyle: { color: "#91cc75" },
        barMaxWidth: 30,
      },
      {
        name: "Accumulation Attend",
        type: "line",
        yAxisIndex: 1,
        data: accumulationAttendValues,
        itemStyle: { color: "#73c0de" },
        smooth: true,
      },
      {
        name: "Accumulation Un-attend",
        type: "line",
        yAxisIndex: 1,
        data: accumulationUnattendValues,
        itemStyle: { color: "#ee6666" },
        smooth: true,
      },
      {
        name: "Accumulation Non Schedule",
        type: "line",
        yAxisIndex: 1,
        data: accumulationNonScheduleValues,
        itemStyle: { color: "#3ba272" },
        smooth: true,
      },
    ],
  };

  // Per shift attendance chart options
  const shiftAttendanceOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter: function (params) {
        let result = `Shift: ${params[0].axisValue}<br/>`;
        params.forEach((param) => {
          if (param.value > 0 || param.seriesName.includes("Total")) {
            result += `${param.seriesName}: ${param.value}<br/>`;
          }
        });
        return result;
      },
    },
    legend: {
      data: [
        "Attend",
        "Un-attend",
        "Late Check-in",
        "Non Schedule",
        "Total Attend",
        "Total Un-attend",
      ],
      bottom: 0,
      textStyle: {
        fontSize: 11,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      top: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: shiftNames,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          fontSize: 10,
          interval: 0,
          formatter: function (value) {
            return value;
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Count",
        position: "left",
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "Total",
        position: "right",
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "Attend",
        type: "bar",
        data: shiftAttendValues,
        itemStyle: { color: "#5470c6" },
        barMaxWidth: 60,
      },
      {
        name: "Un-attend",
        type: "bar",
        data: shiftUnattendValues,
        itemStyle: { color: "#fac858" },
        barMaxWidth: 60,
      },
      {
        name: "Late Check-in",
        type: "scatter",
        data: shiftLateCheckinValues,
        itemStyle: { color: "#ee6666" },
        symbolSize: 8,
      },
      {
        name: "Non Schedule",
        type: "scatter",
        data: shiftNonScheduleValues,
        itemStyle: { color: "#333" },
        symbolSize: 8,
      },
      {
        name: "Total Attend",
        type: "line",
        yAxisIndex: 1,
        data: shiftTotalAttendValues,
        itemStyle: { color: "#73c0de" },
        smooth: true,
      },
      {
        name: "Total Un-attend",
        type: "line",
        yAxisIndex: 1,
        data: shiftTotalUnattendValues,
        itemStyle: { color: "#fc8452" },
        smooth: true,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-[30px] bg-gray-100 dark:bg-gray-900 p-2">
      {/* Daily Attendance Chart */}
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-base font-semibold text-[#333] dark:text-white">
            Attendance - Daily
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#666] dark:text-white">
              October 2023
            </span>
          </div>
        </div>
        <ReactECharts
          option={dailyAttendanceOption}
          style={{ height: "400px" }}
        />
      </div>

      {/* Per Shift Attendance Chart */}
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-5">
          <div className="text-base font-semibold text-[#333] dark:text-white">
            Attendance - Per Shift
          </div>
        </div>
        <ReactECharts
          option={shiftAttendanceOption}
          style={{ height: "400px" }}
        />
      </div>
    </div>
  );
}
