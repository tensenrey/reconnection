import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { SignInActions } from "@/store/slices/signin/signin.slice";
import { ContentControllerActions } from "@store/slices/controller/controller.slice";
import { CardDataActions } from "@store/slices/data/data.slice";
import { SearchModalActions } from "@store/slices/modal/search.modal.slice";
import { ChannelControllerActions } from "@store/slices/channel/channel.slice";
import { SignUpActions } from "@/store/slices/signup/signup.slice";

const AllActions = {
  ...SignInActions,
  ...SignUpActions,
  ...ContentControllerActions,
  ...CardDataActions,
  ...SearchModalActions,
  ...ChannelControllerActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());
