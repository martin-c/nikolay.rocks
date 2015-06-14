import PagesStore from "../stores/pages_store";
import PagesList from "./pages";

export default class CategoryPages extends React.Component {
  render() {
    var category = this.props.params.category;

    category && (category = category.replace(/\+/g, " "));

    return (
      <article className="pages categorized">
        <h1>Pages in category: {category}</h1>

          <PagesList pages={this.pagesIn(category)} />
      </article>
    );
  }

  pagesIn(category) {
    return PagesStore.inst().pages.filter(function(page) {
      return page.category.toLowerCase() === category;
    });
  }
}
