const StatsCard = ({
  taskFilter,
  count = 0,
  iconColor,
  iconBackgroundColor,
  iconClass
}: {
  taskFilter: string;
  count: string | number;
  iconColor: string,
  iconBackgroundColor: string
  iconClass: string
}) => {
  return (
    <span className="col-12 col-sm-3 gx-0 gx-md-3 gy-3 gy-md-4 gx-lg-5" style={{height: "110px"}}>
      <a
        href="/"
        className="card h-100 border-0 rounded-3 shadow text-decoration-none"
        //   onClick={handleOnStatsCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body justify-content-center align-items-center">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <span
              className="rounded-3"
              style={{
                backgroundColor: iconBackgroundColor,
              }}
            >
              <i
                className={`${iconClass} fs-4 p-2`}
                style={{ color: iconColor }}
              ></i>
            </span>
            <h3 className="fw-bold fs-3 fs-md-3">{count}</h3>
          </div>
          <div className="w-100 mt-2 py-1">
            <p className="opacity-50 mb-0 fw-semibold fs-6">{taskFilter}</p>
          </div>
        </div>
      </a>
    </span>
  );
};

export default StatsCard;
