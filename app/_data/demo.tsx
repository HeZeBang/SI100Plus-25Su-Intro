import MDBlock from "@/components/MdBlock";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Chrome, CodeXml, Database, Globe, Rocket } from "lucide-react";
import { SlideT } from "../types/Slides";
import TiltedCard from "@/components/ui/TitledCard";
import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    title: "师资介绍",
  },
  {
    title: "荣誉嘉宾",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="https://teafrogsf.github.io/assets/img/prof_pic.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              曹宇涵
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 曹宇涵 / 蛙 / teafrogsf


`}</MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "师资介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/zebang-he.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="600px"
          imageHeight="600px"
          imageWidth="600px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              贺泽邦
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 贺泽邦 / 糌粑 / ZAMBAR
- 📚 SI 100+ 25 Summer Head TA/Instru. & 24 Summer Instru.
- 💻 23 级 CS 本科生 | ⚡ ENTP | ~~不被定义~~
- 💡 现 GeekPie 社团主席、GeekPie_HPC 超算队队长、清华 TUNA 成员
- 🎓 科研在上海交通大学 IPADS 实验室（组里刚发了一个5090🤤）
- 🔍 研究方向：MLSys、HPC、Architecture
- #️⃣ Tag: 术力口（双子激推）、前后端、DevOps、开源项目、音游（舞萌w5欢迎拼机出校门左转2公里长泰广场风云再起）
- 📫 Website: https://hezebang.github.io/ , Bilibili: 糌粑_ZAMBAR
          `}</MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "师资介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/hengyu-ai.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="400px"
          imageHeight="600px"
          imageWidth="400px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              艾恒宇
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 艾恒宇 / AstatineAi
- 23 CS
- GeekPie 副主席、OI 大犇、现科研在 NC State ~~（这段我私自加的）~~
- 编程语言理论/函数式编程爱好者
- ~~Haskell~~ Agda & Lean4 是世界上最好的语言
- aihy2023@shanghaitech.edu.cn
          `}</MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "师资介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/kph.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              匡鹏昊
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 匡鹏昊 / Penghao Kuang
- 23级CS专业，来自江苏连云港
- 目前在做自然语言处理方向
- 曾挂牌信号与系统、概率论、自然语言处理等多门课程的民间助教，组织过上述课程的小规模民间讨论会
  - 有空会非常佛系地往B站传讲解视频
  - 目前完工系列：《信号与系统破产版讲解》
- B站id：KKKKKKKPH，7个K
`}
          </MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "师资介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/lyx.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="400px"
          imageHeight="600px"
          imageWidth="400px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              黎亚轩
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 黎亚轩 / Yaxuan Li

- 2023级AI荣誉班成员
- 《数学分析》陈克应班课代表
- 原崩绝三修，六命雅超绝厨力
- 狂热漫展爱好者（B站/大麦/cpp你那么多票卖哪去了）
- 立志从事LLM相关工作，说的好但是CUDA out of memory
- 凌晨四点前欢迎联系，但是早上十点必定失联
- （大概率）线性代数王强班助教，欢迎报课
`}</MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "师资介绍",
    content: (
      <img src="./hmt.png" />
    )
  },
  {
    title: "助教介绍"
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/zhuyuan.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              祝元
            </p>
          }
        />
        <div>
          <MDBlock>{`
## 祝元
- 2023级CS专业学生，目前是大道书院第二任学导
- 来打酱油的中层学生，由于摸鱼且菜，所以没卷、不打竞赛、没去3+1、没加社团，想学啥就学啥，所以目前精神状态非常良好。
- 在专业方面不太专业，我会的其他CS专业的应该也会；
- 但是在其他方面比较专业，啥都会一点，V我50传授沟通交流演讲经验。
- 从以上内容中看得出来确实是来打酱油的。
`}</MDBlock>
        </div>
      </div>
    </>)
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/zyk.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              周煜凯
            </p>
          }
        />
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <MDBlock>{`
## 周煜凯
- 23级CS本科生
- QQ：1262702905
- 邮箱：zhouyk2023@shanghaitech.edu.cn
- 网上冲浪广泛（应该）的宅宅，成分复杂
- 欢迎了解Robomaster
`}</MDBlock>
          </div>
          <img src="/rmqr.jpg" alt="Robomaster QR Code" className="max-w-48" />
        </div>
      </div>
    </>)
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/dyk.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              丁彦凯
            </p>
          }
        />
        <MDBlock>{`
## 丁彦凯

- 2023 SPST 物理
- 目前方向：软凝聚态计算（*"AI"* for water and solution）  
- 欢迎物理对计算感兴趣 or CS 对物理感兴趣的同学交流
- 第一：QQ：1602789642  
- 第二：Email：dingyk2023@shanghaitech.edu.cn
- 第三：致力于使用神秘便携乐器在漫展整活 （v我50助力升级设备）
- 第四：预收广百 only 2026 or 下次魔百 搭子（百合豚欠鲨了）  
- 第五：入格启动
`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/llj.png"
          altText="avatar"
          containerHeight="600px"
          containerWidth="600px"
          imageHeight="600px"
          imageWidth="600px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              刘林嘉
            </p>
          }
        />
        <MDBlock>{`
## 刘林嘉

`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="https://avatars.githubusercontent.com/u/47453260?v=4"
          altText="avatar"
          containerHeight="600px"
          containerWidth="600px"
          imageHeight="600px"
          imageWidth="600px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              张哲轩
            </p>
          }
        />
        <MDBlock>{`
## 张哲轩 / Coinred

- 23级CS本科生
- 住在QQ里（160612561，水群害人啊），线下无存在感
- 精通诸多计算机/电子工程/语言学领域的皮毛，科技树乱点
- 泛ACGN爱好者，本质烂梗小鬼（确信）
- 达芬奇睡眠法实践者
`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "助教介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/Sizhe_Zhao.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="400px"
          imageHeight="600px"
          imageWidth="400px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              赵思哲
            </p>
          }
        />
        <MDBlock>{`
## 赵思哲 / Prince213

`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "嘉宾介绍",
  },
  {
    title: "嘉宾介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/zsc.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="400px"
          imageHeight="600px"
          imageWidth="400px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              周守琛
            </p>
          }
        />
        <MDBlock>{`
## 周守琛

- 2021 级本科 CS (刚刚毕业的老登)
- qq: 1354038619
- 邮箱: zhoushch@alumni.shanghaitech.edu.cn (毕业了,多了个alumni)
- 毕业去向: 清华大学 数学与人工智能方向 学硕
- 欢迎大家遇到各种问题 (包括但不限于 SI100) 的时候前来联系

`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "嘉宾介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/zxp.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              周小攀
            </p>
          }
        />
        <MDBlock>{`
## 周小攀 / 阿夸

- 24级工业设计（娱乐方向）
- 中学有信息竞赛经历
- 但本着对~~游戏~~艺术的热爱，选择了创艺学院（SCA）娱乐设计方向
- 当前正在努力学习手绘（代码还是比铅笔更听我话啊。。。）
- 新任排球社社长（欢迎大家来排球社玩！）

`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "嘉宾介绍",
    content: (<>
      <div className="flex gap-10" >
        <TiltedCard
          imageSrc="/cff.jpg"
          altText="avatar"
          containerHeight="600px"
          containerWidth="500px"
          imageHeight="600px"
          imageWidth="500px"
          rotateAmplitude={5}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="bg-white rounded-md text-black text-xs shadow-lg m-5 p-2">
              陈芳菲
            </p>
          }
        />
        <MDBlock>{`
## 陈芳菲

- 23级生物科学专业，来自山东济南，曾作为学子论坛主讲人分享各种实验课生存指南
- 本次分享的主要内容是如何选课，如何面对项目式作业/课程汇报等全新的学习形式，对于擅长/不擅长的科目应该如何应对
- 希望能够帮助到大家～

`}</MDBlock>
      </div>
    </>)
  },
  {
    title: "Outro",
    content: (<MDBlock>{`
Ref: teafrogsf

- 这门课对我们而言是一个尝试，我们希望能够通过这门课程的努力，逐步将教学的经验和成果应用到正式的课程中。
- 大家也不用担心学完之后会不会忘掉，忘掉一门学过课程的知识细节是很正常的，但只要有了记忆和经验，在未来你们遇到问题的
      `}</MDBlock>)
  }
] as SlideT[];

export default slides;