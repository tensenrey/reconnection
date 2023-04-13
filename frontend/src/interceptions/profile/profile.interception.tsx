import React, { FunctionComponent } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useUserQuery } from "@/store/slices/api/user.api";
import { View } from "@views/export";
import { CoreTypes } from "@/@types/namespaces";


interface IPersonCard {
  data: CoreTypes.User.IUserSource;
}

interface IProfile {
  component: FunctionComponent<IPersonCard>
}


export const Profile: FunctionComponent<IProfile> = ({
  component: Component,
}) => {
  const { id } = useParams();
  const { data, isError, isLoading } = useUserQuery(id!);

  return isLoading ? (
    <View.Redirect />
  ) : !isError ? (
    <Component data={data!} />
  ) : (
    <Navigate to="/notfound" />
  );
};
