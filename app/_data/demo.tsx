import MDBlock from "@/components/MdBlock";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Chrome, CodeXml, Database, Globe, Rocket } from "lucide-react";
import { SlideT } from "../types/Slides";
import TiltedCard from "@/components/ui/TitledCard";

const slides = [
  {
    title: "什么是 SI100+？",
    content: (<>
      <MDBlock>{`
- SI 100+ 是一门面向**任何专业学生**的课程，旨在帮助大家度过传说中的 SI 100 课程。
- 这一门课是学长自发开设的，没有报酬！！没有费用！！至今已经开设了 4 年（吧）。元老成员已经毕业😢
- SI 100+ 由四个部分组成
  - **信息科学入门**：让没有计算机基础的同学也能轻松入门
  - **Python 基础**：学习 Python 编程语言的基础知识
  - **人工智能入门**：（尽量）用大白话介绍人工智能
  - **上科大生存指南&经验分享**：我们从不同专业请了不同学长学姐来分享他们的大学经验、方向分享，以及专业解读
    `}</MDBlock>
    </>)
  },
  {
    title: "SI100+ 有什么？",
    content: (<>
      <MDBlock>{`
- 正式课堂：我们的课堂以直播的方式进行，学长自费~~斥巨资~~给大家买了 300 人的 Zoom，希望大家能多多互动和交流！
- Office Hour / OH：我们的学长们会在固定时间段内在线解答大家的问题，帮助大家解决学习中的疑惑。
- 课程回放：我们会将课堂录制下来，方便大家随时回顾和学习。预计会上传到 bilibili~
- Piazza：我们课堂有专门的 Piazza，方便大家提问和交流！
  - 如果还没有加入，请查看群公告！
  - *P.S.* 为什么 Piazza 这么重要？
    `}</MDBlock>
    </>)
  },
  {
    title: "Who am I?",
    content: (<>
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">
            Kendrick Lamar - GNX
          </p>
        }
      />

    </>)
  }
] as SlideT[];

export default slides;