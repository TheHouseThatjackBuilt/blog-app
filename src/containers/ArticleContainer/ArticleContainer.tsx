import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IState } from '../../types/redux/index.d';
import { IParams } from '../../types/components/index.d';
import { getArticle } from '../../redux/middleware/reduxThunk';
import { articleSelector } from '../../redux/selectors/index';
import { SingleArticle } from '../../components/Articles/SingleArticle/SingleArticle';

type PropsFromRedux = ConnectedProps<typeof connector>;

const ArticleContainer = ({ article, getArticle }: PropsFromRedux) => {
  const [loading, setLoading] = useState(true);
  const { slug } = useParams<IParams>();

  useEffect(() => {
    setLoading(true);

    (async () => {
      await getArticle(slug);
      setLoading(false);
    })();
  }, [slug]);

  return <SingleArticle data={article} load={loading} />;
};

const mapStateToProps = (state: IState) => ({
  article: articleSelector(state),
});
const mapDispatch = { getArticle };
const connector = connect(mapStateToProps, mapDispatch);
export default connector(ArticleContainer);
