import { Skeleton } from "@/components/ui/skeleton";

export default function ActivitySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-40 w-full rounded-lg" />
    </div>
  );
}
