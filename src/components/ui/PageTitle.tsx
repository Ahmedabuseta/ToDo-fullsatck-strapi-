interface iProps {
 title:string
}

const PageTitle = ({title}:iProps) => {

return(
<div className="text-5xl">
{title}
</div>
)
}
export default PageTitle;