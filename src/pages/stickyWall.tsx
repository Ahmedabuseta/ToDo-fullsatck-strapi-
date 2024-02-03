import StickWalls from "../components/stickyWall/stickWalls";
import PageTitle from "../components/ui/PageTitle";

const StickyWallPage = () => {

return(
<div className="flex-col space-y-5 px-3 pt-4 items-start justify-start gap-4">
  <PageTitle title="Sticky Wall" />
  <StickWalls />
</div>
)
}
export default StickyWallPage;