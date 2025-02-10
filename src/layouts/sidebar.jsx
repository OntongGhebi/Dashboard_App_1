import { forwardRef } from "react";

import { cn } from "../utils/cn";

// eslint-disable-next-line no-empty-pattern
export const Sidebar = forwardRef(({}, ref) => {
    return <aside ref={ref} className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900"
    )}
        >Sidebar
        <div className="flex gap-x-3 p-3">

        </div>
    </aside>;
});

Sidebar.displayName = "Sidebar";