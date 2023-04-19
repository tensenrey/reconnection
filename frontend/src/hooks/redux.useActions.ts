import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { SignInActions } from "@/store/slices/signin/signin.slice";
import { ContentControllerActions } from "@store/slices/controller/controller.slice";
import { CardDataActions } from "@store/slices/data/data.slice";
import { ChannelControllerActions } from "@store/slices/channel/channel.slice";
import { SignUpActions } from "@/store/slices/signup/signup.slice";
import { UserActions } from "@store/slices/user/user.sclice";

const AllActions = {
  ...UserActions,
  ...SignInActions,
  ...SignUpActions,
  ...ContentControllerActions,
  ...CardDataActions,
  ...ChannelControllerActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
