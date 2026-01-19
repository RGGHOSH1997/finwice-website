import Details2 from "@/components/blogs/Details2";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import { allBlogs } from "@/data/blogs";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import type { Blog } from "@/types/blogs";
const metadata = {
  title:
    "Blog Details 02 || FinWice - Business & Finance Consulting - Reactjs Template",
  description: "FinWice - Business & Finance Consulting - Reactjs Template",
};
export default function BlogDetailsPage2() {
  let params = useParams();
  const id = params.id;
  const blog: Blog =
    allBlogs.filter((p) => String(p.id) === String(id))[0] || allBlogs[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="main-content tf-spacing-3">
        <Details2 blog={blog} />
        <RelatedBlogs />
      </div>
    </>
  );
}
