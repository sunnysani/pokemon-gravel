import classes from "./PageSelector.module.css";
import { useNavigate } from "react-router-dom";

const PageSelector = function ({ page, maxPage, setLimitHandler }) {
  const navigate = useNavigate();

  const pageAvailable = [];
  if (parseInt(page) - 2 > 1)
    pageAvailable.push(
      <span className={classes.span} key="moreLeft">
        ...
      </span>
    );
  for (let i = parseInt(page) - 2; i <= parseInt(page) + 2; i++) {
    if (i >= 1 && i <= maxPage) {
      pageAvailable.push(
        <button
          className={classes.button}
          onClick={() => navigate(`/pages/${i}`)}
          key={`page-${i}`}
        >
          {i === page ? <b>{i}</b> : i}
        </button>
      );
    }
  }
  if (parseInt(page) + 2 < maxPage)
    pageAvailable.push(
      <span className={classes.span} key="moreRight">
        ...
      </span>
    );

  return (
    <div>
      <div className={classes.container}>
        {page > 1 && (
          <button
            className={classes.button}
            onClick={() => navigate(`/pages/1`)}
          >
            &lt;&lt;
          </button>
        )}
        {page > 1 && (
          <button
            className={classes.button}
            onClick={() => navigate(`/pages/${parseInt(page) - 1}`)}
          >
            &lt;
          </button>
        )}
        {pageAvailable.map((item) => item)}
        {page < maxPage && (
          <button
            className={classes.button}
            onClick={() => navigate(`/pages/${parseInt(page) + 1}`)}
          >
            &gt;
          </button>
        )}
        {page < maxPage && (
          <button
            className={classes.button}
            onClick={() => navigate(`/pages/${parseInt(maxPage)}`)}
          >
            &gt;&gt;
          </button>
        )}
      </div>
      <div className={classes.limitSetter}>
        <p>Limit item per page:&nbsp;&nbsp;</p>
        <select
          onChange={(e) => {
            setLimitHandler(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default PageSelector;
