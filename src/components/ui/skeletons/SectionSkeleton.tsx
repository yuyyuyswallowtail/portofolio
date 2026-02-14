import { Skeleton } from "@/components/ui/skeleton";

export default function SectionSkeleton() {
  return (
    <div className="container mx-auto px-4 py-24 space-y-6">
      <Skeleton className="h-8 w-1/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
