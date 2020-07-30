import * as React from "react";
import {Helmet} from "react-helmet/es/Helmet";
import './Article.scss';

export default class Article extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const ArticleContent = this.props.compontent;

    return(
      <div className={'Article'}>
        <Helmet>
          <title>Michelle Akanji ∆ {this.props.title}</title>
          <meta property="og:image" content={this.props.img}/>
          <meta name='description' content={this.props.description}/>
        </Helmet>

        <ArticleContent/>

      </div>
    )
  }
}
