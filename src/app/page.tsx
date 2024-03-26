import TradingChart from "@/components/SimpleChart";
import { returnsData, ddPeriods } from "@/utils/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TradingChart
        data={returnsData.data.combined}
        referenceDate={ddPeriods.data}
      />
    </main>
  );
}
