import Banner1 from "./components/banner";
import DailyTraffic from "./components/daily-traffic";
import PieChartCard from "./components/pie-chart-card";




const page = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <Banner1 />
        <DailyTraffic />
        <PieChartCard />
      </div>
    </div>
  );
};

export default page;
