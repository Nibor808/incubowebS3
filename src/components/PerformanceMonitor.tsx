import React, {Profiler} from 'react';

interface PerformanceMonitorProps {
    children: React.ReactNode;
    id: string;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({children, id}) => {
    const handleRender: React.ProfilerOnRenderCallback = (
        id: string,
        phase: 'mount' | 'update' | 'nested-update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number
    ) => {
        console.log({
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
        });
    };

    return (
        <Profiler id={id} onRender={handleRender}>
            {children}
        </Profiler>
    );
};
