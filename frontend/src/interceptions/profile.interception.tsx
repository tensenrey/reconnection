import React, { FunctionComponent } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useUserQuery } from "@/store/slices/api/user.api";
import { View } from "@views/export";

export const Profile: FunctionComponent<any> = ({
  component: Component,
}) => {
  const { id } = useParams();
  const { data, isError, isLoading } = useUserQuery(id!);

  return isLoading ? (
    <View.Redirect />
  ) : !isError ? (
    <Component data={data} />
  ) : (
    <Navigate to="/notfound" />
  );
};
