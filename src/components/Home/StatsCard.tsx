const StatsCard = ({
  taskFilter,
  count = 0,
  iconColor,
  iconBackgroundColor
}: {
  taskFilter: string;
  count: string | number;
  iconColor: string,
  iconBackgroundColor: string
}) => {
  return (
    <span className="col-12 col-sm-3 gx-0 gx-md-3 gy-3 gy-md-4 gx-lg-5">
      <a
        href="/"
        className="card h-100 border-0 rounded-3 shadow text-decoration-none"
        //   onClick={handleOnStatsCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body justify-content-center align-items-center">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <span
              className="px-3 py-2 rounded-3"
              style={{
                backgroundColor: iconBackgroundColor,
              }}
            >
              <i
                className="bi bi-file-earmark-richtext fs-2 fs-md-4"
                style={{ color: iconColor }}
              ></i>
            </span>
            <h3 className="fw-bold fs-2 fs-md-3">{count}</h3>
          </div>
          <div className="w-100 mt-4">
            <p className="opacity-50 mb-0 fw-semibold fs-6">{taskFilter}</p>
          </div>
        </div>
      </a>
    </span>
  );
};

export default StatsCard;
