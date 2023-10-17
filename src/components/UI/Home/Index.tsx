import StatsCard from "./StatsCard";

const Home = () => {
  return (
    <div className="row justify-content-between justify-content-lg-center">
      <StatsCard
        taskFilter="All"
        count={5}
        iconColor="#235bf5"
        iconBackgroundColor="#235bf520"
      />
      <StatsCard
        taskFilter="Completed"
        count={3}
        iconColor="#6ed146"
        iconBackgroundColor="#6ed14620"
      />
      <StatsCard
        taskFilter="Uncompleted"
        count={2}
        iconColor="#f5a523"
        iconBackgroundColor="#f5a52320"
      />
    </div>
  );
};

export default Home;
