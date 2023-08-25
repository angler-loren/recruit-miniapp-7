import { View, Text, Image } from "@tarojs/components";
import logo from "../../icons/logo.png";
import { useDispatch, useSelector } from "react-redux";

import "./user.scss";

export default function User() {
  const { nickName } = useSelector((state) => state.userSlice);
  return (
    <View className="box">
      <View className="top">
        <View className="text-container">
          <View className="greet">早上好，</View>
          <Text className="nickname">{nickName}</Text>
        </View>
        <View className="profile-photo">
          <Image className="photo" src="" mode="scaleToFill"></Image>
        </View>
      </View>
      <View className="info-box">
        <View className="info rotate"></View>
        <View className="info info-up">
          <View className="info-box">
            <View className="info-box-top">
              <View className="name">耶耶耶</View>
              <View className="academy">
                <View className="school">云顶书院</View>
                <View className="direction">设计方向</View>
              </View>
            </View>
            <View className="info-container">
              <View>专业班级：软件2139</View>
              <View>手机号：155522222222</View>
              <View>QQ：5545454</View>
              <View>邮箱：12154512125@qq.com</View>
            </View>
          </View>
          <View className="icon">
            <Image src={logo} className="img" mode="scaleToFill"></Image>
          </View>
        </View>
      </View>
    </View>
  );
}
