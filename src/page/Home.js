
import React , {useState , useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "../components/card/Card"
import CardSkeleton from "../components/skeleton/CardSkeleton"

const Home = () => {
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(0);

  // infinite scroll data
  const getComments = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    );
    setItems(res.data);
    return res.data;
  };

  useEffect(() => {
    getComments();
  }, [page]);

  // next move data
  const fetchData = async () => {
    const commentsFormServer = await getComments();
    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <CardSkeleton key={n} />
      ))}
      endMessage={<h1>ending...</h1>}
    >
      <div className="container">
        <div style={{}}>
          {items &&
            items.map((item) => {
              return <Card key={item.id} item={item} />;
            })}

          {!items &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
              return <CardSkeleton key={n} />;
            })}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Home;
