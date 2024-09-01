import React from "react";

interface ResponseModel {
  data: any;
  status: number;
}

const UserApi = (url: string, options: RequestInit) => {
  const [data, setData] = React.useState<ResponseModel>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ResponseModel = await fetch(url, options).then((res) =>
          res.json()
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [options, url]);

  return { data, loading, error };
};

export default UserApi;
