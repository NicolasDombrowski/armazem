import "./chartSwitch.css";
import "@/app/transitions/show-hideHorizontal.css";

import { ReactNode } from "react";

interface switchProps {
        chartLeftContent: ReactNode;
        chartRightContent: ReactNode;
        chartCurrent: string;
}

export default function ChartSwitch({
        chartLeftContent,
        chartRightContent,
        chartCurrent,
}: switchProps) {
        return (
                <div className="chartSwitch">
                        <div
                                className={`chartLeft ${chartCurrent === "left" ? "shown" : "hidden"}`}>
                                {chartLeftContent}
                        </div>
                        <div
                                className={`chartRight ${chartCurrent === "right" ? "shown" : "hidden"}`}>
                                {chartRightContent}
                        </div>
                </div>
        );
}
