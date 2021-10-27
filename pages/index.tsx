import { useRef, useState } from "react";
import { Prisma } from "prisma";
import { Col, Row, Input } from "antd";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "antd/dist/antd.less";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import prisma from "../lib/prisma";
import { fetcher } from "../utils/fetcher";
import { Header, Swiper, Form, Button } from "../components";
import {
  IconArrowLeft,
  IconArrowRight,
  IconStar,
  ImageAIKMD,
  ImageBlackstone,
  ImageCardPodium,
  ImageCentralFloridaUniversity,
  ImageGeorgetownUniversity,
  ImageLightCircleOrnament,
  ImageLighterCircleOrnament,
  ImageLineOrnament,
  ImageMap,
} from "../assets";
import { advantagesList } from "../configs/content";
import {
  AboutAdvantageWrapper,
  AboutWrapper,
  AdvantageWrapper,
  HeroWrapper,
  Wrapper,
} from "./index.style";
import breakpoints from "../configs/breakpoints";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

export async function getServerSideProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany();
  return {
    props: { initialUsers: users },
  };
}

export function formatDate(string) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([]);
}

export default function Home({ initialUsers }) {
  const [users, setUsers] =
    useState<Prisma.UserUncheckedCreateInput[]>(initialUsers);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const prevSlideBtn = useRef(null);
  const nextSlideBtn = useRef(null);

  const desktopScreen = useMediaQuery({ maxWidth: breakpoints.desktop });
  const phoneScreen = useMediaQuery({ maxWidth: breakpoints.phone });

  const formHandle = async (e) => {
    e.preventDefault();
    const body: Prisma.UserCreateInput = {
      fullName,
      email,
    };

    await fetcher("/api/create", { user: body });
    await setUsers([...users, body]);
    setFullName("");
    setEmail("");
  };

  const onSliderHandler = () => {
    if (phoneScreen) return { slidesPerView: 2, slidesPerGroup: 2 };
    if (desktopScreen) return { slidesPerView: 3, slidesPerGroup: 3 };
    return { slidesPerView: 4, slidesPerGroup: 4 };
  };

  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroWrapper>
        <Row className="hero_section_wrapper">
          <Col className="container_hero_text">
            <Row>
              <Col span={24} className="component_bonus">
                <Row gutter={12} wrap={false} align="middle">
                  <Col>
                    <IconStar height={20} width={20} />
                  </Col>
                  <Col>Get up to $250 when you open up an account</Col>
                </Row>
              </Col>
              <Col span={24} className="component_title">
                Digital halal banking made for everyone
              </Col>
              <Col span={24}>
                <Col className="component_subtitle">
                  Combining latest blockchain technologies and islamic financial
                  guidelines to deliver safe and secure islamic banking service
                  through mobile platform.
                </Col>
              </Col>
              <Col span={24} className="component_invitation">
                Join our waiting list to get early access to halal, ethical
                banking services.&nbsp;
                <Link passHref href="/">
                  <span className="learn_more">Learn more</span>
                </Link>
              </Col>
              <Col span={24} className="component_form">
                <Form>
                  <Row className="component_form_row">
                    <Col span={24}>
                      <Form.Item name="name">
                        <Input placeholder="Full name" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="email">
                        <Input placeholder="Email" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Button block type="primary" size="middle">
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col span={24}>
                <Row align="middle" className="component_sponsor">
                  <Col>
                    <Image
                      src={ImageGeorgetownUniversity}
                      alt="georgetown-university"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image
                      src={ImageCentralFloridaUniversity}
                      alt="university-central-florida"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image
                      src={ImageBlackstone}
                      alt="blackstone"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image src={ImageAIKMD} alt="aikmd" layout="intrinsic" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="container_hero_image">
            <Image src={ImageCardPodium} alt="card-podium" layout="intrinsic" />
          </Col>
        </Row>
      </HeroWrapper>
      <AboutAdvantageWrapper>
        <AboutWrapper>
          <Row className="about_section_wrapper">
            <Col className="container_about_base">
              <Row className="component_about_base_row">
                <Col span={24} className="component_about_base_title">
                  The easiest-way to bank riba-free for all your banking needs.
                </Col>
                <Col span={24} className="component_about_base_subtitle">
                  With WadhBank, you can bank everywhere around the world just
                  using our mobile platform.
                </Col>
                <Col span={24} className="component_about_base_get_more">
                  <Button type="text">Get to know more about WadhBank</Button>
                </Col>
              </Row>
              <Col className="component_about_base_bg">
                <Image
                  src={ImageLightCircleOrnament}
                  alt=""
                  layout="intrinsic"
                />
              </Col>
            </Col>
            <Col className="container_about_advisory">
              <Row
                className="component_about_advisory_row"
                justify="start"
                wrap={false}
              >
                <Col>
                  <Row className="component_about_advisor_content">
                    <Col className="component_about_advisory_count">1.5K+</Col>
                    <Col className="component_about_advisory_desc">
                      Excited waitlisted customers around the world
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="component_about_advisor_content">
                    <Col className="component_about_advisory_count">150+</Col>
                    <Col className="component_about_advisory_desc">
                      Years of advisory board experience
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Col className="component_about_advisory_bg">
                <Image src={ImageMap} alt="card-podium" layout="intrinsic" />
              </Col>
            </Col>
          </Row>
        </AboutWrapper>
        <AdvantageWrapper>
          <Row className="advantage_section_wrapper">
            <Col span={24} className="container_advantage_base">
              <Row
                justify="space-between"
                wrap={false}
                align="bottom"
                className="component_advantage_base_row"
              >
                <Col span={24} className="component_advantage_base_title">
                  Join with us and get the advantages
                </Col>
                <Col className="component_advantages_base_bg">
                  <Image
                    src={ImageLighterCircleOrnament}
                    alt=""
                    layout="intrinsic"
                  />
                </Col>
                <Col className="component_advantage_base_slider_handler">
                  <Row gutter={24} wrap={false} align="middle">
                    <Col ref={prevSlideBtn}>
                      <Button type="link">
                        <IconArrowLeft />
                      </Button>
                    </Col>
                    <Col ref={nextSlideBtn}>
                      <Button type="link">
                        <IconArrowRight />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="container_advantage_slider">
              <Swiper
                {...onSliderHandler()}
                loop={true}
                spaceBetween={20}
                nextOnClick={nextSlideBtn}
                prevOnClick={prevSlideBtn}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                dataSource={advantagesList}
                renderItem={(item, index) => {
                  return (
                    <Row key={index} className="component_slider_item">
                      <Col className="component_slider_item_icon">
                        <Image title="icon" src={item?.icon} alt="" />
                      </Col>
                      <Col span={24}>
                        <Row className="component_slider_item_text">
                          <Col className="component_slider_item_text_title">
                            {item?.label}
                          </Col>
                          <Col className="component_slider_item_text_desc">
                            {item?.desc}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  );
                }}
              />
            </Col>
          </Row>
        </AdvantageWrapper>
        <Col className="component_about_advantage_bg">
          <Image src={ImageLineOrnament} alt="" layout="intrinsic" />
        </Col>
      </AboutAdvantageWrapper>
      <form onSubmit={formHandle}>
        <input
          className="bg-white rounded-sm border border-indigo-700"
          type="text"
          onChange={(e) => {
            return setFullName(e.target.value);
          }}
          value={fullName}
        />
        <input
          className="bg-white rounded-sm border border-indigo-700"
          type="text"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
          value={email}
        />
        <button>Submit</button>
      </form>

      {users.map((u, index) => {
        return (
          <div key={index}>
            <div className="flex">
              <p>
                {u.fullName}| {u.email}
              </p>
            </div>
            <input
              className="bg-white rounded-sm border border-indigo-700"
              type="text"
              onChange={(e) => {
                return setFullName(e.target.value);
              }}
              value={fullName}
            />
            <input
              className="bg-white rounded-sm border border-indigo-700"
              type="text"
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
              value={email}
            />

            <button>Submit</button>
          </div>
        );
      })}

      {users.map((u, index) => {
        return (
          <div className="flex" key={index}>
            <p>
              {u.fullName}| {u.email} | {formatDate(u.dateCreated)}
            </p>
          </div>
        );
      })}
    </Wrapper>
  );
}
