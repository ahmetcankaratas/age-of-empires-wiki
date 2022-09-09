import classes from "./MainFilter.module.scss";
import AgesFilter from "./AgesFilter/AgesFilter";
import RangeFilter from "./RangeFilter/RangeFilter";
import CostFilter from "./CostFilter/CostFilter";

const MainFilter = () => {
  const resources = ["wood", "food", "gold"];

  return (
    <section className={classes.bar}>
      <AgesFilter />
      {resources.map((resource) => (
        <div key={resource} className={classes.slider}>
          <CostFilter resource={resource} />
          <RangeFilter resource={resource} />
        </div>
      ))}
    </section>
  );
};

export default MainFilter;
