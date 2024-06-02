function Job() {
    const [jobLoadCall, setJobLoadCall] = useState({
      state: "pending",
    });
    let [searchParams] = useSearchParams();
  
    const jobId = searchParams.get("id");
  
    useEffect(() => {
      setJobLoadCall({
        state: "pending",
      });
      fetch(`http://localhost:3000/job/load?id=${jobId}`, {
        method: "GET",
      }).then(async (response) => {
        const responseJson = await response.json();
        if (response.status >= 400) {
          setJobLoadCall({ state: "error", error: responseJson });
        } else {
          setJobLoadCall({ state: "success", data: responseJson });
        }
      });
    }, [jobId]);

    function getChild() {
        switch (jobCreateCall.state) {
          case "pending":
            return (
              <div jobTitle={styles.loading}>
                <Icon size={2} path={mdiLoading} spin={true} />
              </div>
            );
          case "success":
            return (
              <>
                <Area place={jobCreateCall.data} />
                <JobList job={jobCreateCall.data} />
              </>
            );
          case "error":
            return (
              <div jobTitle={styles.error}>
                <div>Nepodařilo se načíst data o práci.</div>
                <br />
                <pre>{JSON.stringify(jobCreateCall.error, null, 2)}</pre>
              </div>
            );
          default:
            return null;
        }
      }

      return getChild();
 }
  
  export default Job;