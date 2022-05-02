import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardLoadingSkeleton() {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton count={3} />
        <Skeleton width={100} />
        <Skeleton circle={true} height={50} width={50} />
  </SkeletonTheme>
  )
}
