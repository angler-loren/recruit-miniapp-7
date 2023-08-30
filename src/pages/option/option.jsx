/*
 * @Author: DoubleLiHao =2998000782@qq.com
 * @Date: 2023-08-21 21:21:30
 * @LastEditors: DoubleLiHao =2998000782@qq.com
 * @LastEditTime: 2023-08-28 18:03:47
 * @FilePath: \yzyy\src\pages\option\option.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { View } from "@tarojs/components";
import "./option.scss";
import Taro from "@tarojs/taro";
import ButtonOption from "../../Components/ButtonOption/ButtonOption";

export default function Tool() {
  const logos = {
    ticketLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/ticket-logo.png",
    interviewLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/interview-logo.png",
    applyLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/apply-logo.png",
    scanLogo:
      "https://img-doubleli.oss-cn-hangzhou.aliyuncs.com/scan-logo.png",
  };
  const handlerOptionClick = (url) => {
    Taro.navigateTo({
      url,
    });
  };

  const scanCode = () => {
    Taro.scanCode({
      success: (res) => {
        console.log(res.result);
        Taro.showToast({
          title: '扫码成功',
          duration: 1000
        })
      },
      fail: (err) => {
        console.log(err);
      }
    })
  }
  return (
    <View className="page">
      <View className="box">
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/ticket/ticket");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="抢票"
            iconUrl={logos.ticketLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/interview/interview");
          }}
        >
          <ButtonOption
            iconPosition="right"
            value="面试"
            iconUrl={logos.interviewLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={() => {
            handlerOptionClick("/pages/apply/apply");
          }}
        >
          <ButtonOption
            iconPosition="left"
            value="报名"
            iconUrl={logos.applyLogo}
          ></ButtonOption>
        </View>
        <View
          className="box-item"
          onClick={scanCode}
        >
          <ButtonOption
            iconPosition="right"
            value="扫码"
            iconUrl={logos.scanLogo}
          ></ButtonOption>
        </View>
      </View>
    </View>
  );
}
