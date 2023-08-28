import { View, Image } from "@tarojs/components";
import "./applicationSubmit.scss";
import ButtonSubmit from "../../Components/ButtonSubmit/ButtonSubmit";
import ColumnBox from "../../Components/ColumnBox/ColumnBox";
import submitLogo from "../../assets/icons/applicationSubmitBlue.png";
import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from "react-redux";
import { setApplicationUrl } from "../../store/userSlice";

export default function ApplicationSubmit() {
  const { applicationUrl } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const submitImg = () => {
    Taro.chooseImage({
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        dispatch(setApplicationUrl(res.tempFilePaths));
      },
      fail: (err) => {
        console.log("未选择图片", err);
      },
    });
  };
  const previewImg = (applicationUrl) => {
    Taro.previewImage({
      urls: applicationUrl,
    })
  }
  const showImgOrSubmit = (applicationUrl) => {
    if (applicationUrl != "") {
      return (
        <Image className="img" src={applicationUrl[0]} onClick={()=>previewImg(applicationUrl)}></Image>
      );
    } else {
      return (
        <View className="inner-content" onClick={submitImg}>
          <View className="icon">
            <Image class="img" src={submitLogo}></Image>
          </View>
          <View className="text">点击提交</View>
        </View>
      );
    }
  };
  return (
    <View className="page">
      <View className="title">申请书提交</View>
      <View className="info-box">
        <ColumnBox>
          <View className="content">
            <View className="text">申请书照片</View>
            <View className="application-box">
              {showImgOrSubmit(applicationUrl)}
            </View>
            <View className="warn">(请尽可能保证图片清晰哦)</View>
          </View>
        </ColumnBox>
      </View>
      <View className="button-box">
        <ButtonSubmit value="提交"></ButtonSubmit>
      </View>
    </View>
  );
}
