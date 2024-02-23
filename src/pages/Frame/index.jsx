import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const showMoreOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const showMoreOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const topRelevantOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const unitedStatesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FramePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[150px] justify-end mx-auto pr-[11px] w-full">
        <div className="flex flex-col items-center max-w-[1603px] mx-auto md:px-5 w-full">
          <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[480px] md:mt-0 my-[13px] p-[5px] rounded-lg w-[17%] md:w-full">
              <Img
                className="h-6 mb-[3px] ml-1 md:ml-[0] w-6"
                src="images/img_image.svg"
                alt="image"
              />
            </div>
            <Text
              className="mb-[21px] md:ml-[0] ml-[79px] md:mt-0 mt-[25px] text-blue_gray-100 text-sm"
              size="txtInterRegular14"
            >
              Categories
            </Text>
            <Text
              className="md:ml-[0] ml-[53px] md:mt-0 my-[23px] text-blue_gray-100 text-sm"
              size="txtInterRegular14"
            >
              Website Builders
            </Text>
            <Text
              className="mb-[21px] md:ml-[0] ml-[84px] mr-[363px] md:mt-0 mt-[25px] text-blue_gray-100 text-sm"
              size="txtInterRegular14"
            >
              <>Today&#39;s deals</>
            </Text>
          </header>
          <div className="h-[2820px] sm:h-[3916px] md:h-[4606px] relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-80 inset-x-[0] justify-start mx-auto top-[0] w-full">
              <div className="h-[2375px] sm:h-[3586px] md:h-[4556px] relative w-full">
                <div className="absolute h-[2372px] sm:h-[3586px] md:h-[4556px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute h-[2347px] sm:h-[3586px] md:h-[4556px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-gray-50 h-[1411px] mt-[147px] mx-auto w-[65%]"></div>
                    <div className="absolute bg-gray-50 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[107px] md:px-10 sm:px-5 w-full">
                      <div className="flex flex-col gap-[26px] justify-start mt-[39px] w-[78%] md:w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[22px] w-[79%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                            <Text
                              className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-blue_gray-700 text-sm w-[105px]"
                              size="txtInterRegular14Bluegray700"
                            >
                              Tools
                            </Text>
                            <Text
                              className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-[13px] text-blue_gray-700 w-[138px]"
                              size="txtInterRegular13"
                            >
                              AWS Builder
                            </Text>
                            <Button
                              className="!text-blue_gray-700 cursor-pointer min-w-[105px] text-[13px] text-center"
                              shape="round"
                              color="white_A700"
                              size="sm"
                            >
                              Start Build
                            </Button>
                            <Text
                              className="bg-white-A700 h-9 justify-center pb-2 pl-4 sm:pr-5 pr-[29px] pt-[11px] rounded-[12px] text-[13px] text-blue_gray-700 w-[132px]"
                              size="txtInterRegular13"
                            >
                              Build Supplies
                            </Text>
                            <Text
                              className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-blue_gray-700 text-sm w-[126px]"
                              size="txtInterRegular14Bluegray700"
                            >
                              Tooling
                            </Text>
                            <Text
                              className="bg-white-A700 h-9 justify-center pb-2 pl-4 sm:pr-5 pr-[35px] pt-[11px] rounded-[12px] text-[13px] text-blue_gray-700 w-[140px]"
                              size="txtInterRegular13"
                            >
                              BlueHosting
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[5px] w-[52%] md:w-full">
                            <Text
                              className="text-[13px] text-blue_gray-500"
                              size="txtInterRegular13Bluegray500"
                            >
                              Home
                            </Text>
                            <Img
                              className="h-2 ml-3 sm:ml-[0] sm:mt-0 mt-[3px]"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtInterRegular14Bluegray60001"
                            >
                              Hosting for all
                            </Text>
                            <Img
                              className="h-2 ml-3.5 sm:ml-[0] sm:mt-0 mt-[3px]"
                              src="images/img_arrowright.svg"
                              alt="arrowright_One"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] text-blue_gray-500 text-sm"
                              size="txtInterRegular14Bluegray500"
                            >
                              Hosting
                            </Text>
                            <Img
                              className="h-2 sm:ml-[0] ml-[15px] sm:mt-0 mt-[3px]"
                              src="images/img_arrowright.svg"
                              alt="arrowright_Two"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtInterRegular14Bluegray60001"
                            >
                              Hosting6
                            </Text>
                            <Img
                              className="h-2 ml-3.5 sm:ml-[0] sm:mt-0 mt-[3px]"
                              src="images/img_arrowright.svg"
                              alt="arrowright_Three"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] text-blue_gray-600_01 text-sm"
                              size="txtInterRegular14Bluegray60001"
                            >
                              Hosting5
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start w-full">
                          <List
                            className="flex flex-col gap-[5px] items-center w-[98%]"
                            orientation="vertical"
                          >
                            <div className="sm:h-[254px] h-[270px] md:h-[616px] relative w-full">
                              <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[7px] px-[7px] rounded-[12px] w-[98%]">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                                  <div className="flex flex-col gap-3 items-center justify-start md:mt-0 mt-[75px] w-[15%] md:w-full">
                                    <Img
                                      className="h-[103px] md:h-auto object-cover w-full"
                                      src="images/img_download1.png"
                                      alt="downloadOne"
                                    />
                                    <Text
                                      className="text-[13px] text-blue_gray-600 text-center"
                                      size="txtInterRegular13Bluegray600"
                                    >
                                      Builder 1
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[58px] md:mt-0 mt-[21px] w-[53%] md:w-full">
                                    <Text
                                      className="leading-[24.00px] text-base text-blue_gray-700 w-[98%] sm:w-full"
                                      size="txtInterRegular16"
                                    >
                                      WixPro 72-Inch Responsive Website Builder-
                                      Comprehensive Digital Platform Creation
                                      Tool, Streamlined Design Interface for
                                      Professional Websites and Online Stores
                                      (Black/Blue)
                                    </Text>
                                    <Text
                                      className="mt-[7px] text-base text-blue_gray-800"
                                      size="txtInterBold16"
                                    >
                                      Main highlights
                                    </Text>
                                    <Text
                                      className="leading-[24.00px] md:ml-[0] ml-[18px] mt-2.5 text-base text-blue_gray-700 w-[97%] sm:w-full"
                                      size="txtInterRegular16"
                                    >
                                      [What You Get]: Receive the WixPro website
                                      builder suite, access to premium design
                                      templates, an extensive library of widgets
                                      and apps, and detailed step-by-step
                                      guides.
                                    </Text>
                                    <SelectBox
                                      className="mt-6 text-base text-blue-500 text-left w-[21%] sm:w-full"
                                      placeholderClassName="text-blue-500"
                                      indicator={
                                        <Img
                                          className="h-4 mr-[0] w-4"
                                          src="images/img_arrowdown.svg"
                                          alt="arrow_down"
                                        />
                                      }
                                      isMulti={false}
                                      name="groupFiftyThree"
                                      options={showMoreOptionsList}
                                      isSearchable={false}
                                      placeholder="Show more"
                                    />
                                  </div>
                                  <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start mb-[9px] md:ml-[0] ml-[25px] w-1/4 md:w-full">
                                    <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[3px] rounded-bl-[12px] rounded-br-[12px] w-[59%] md:w-full">
                                      <div className="flex flex-col items-end justify-start mb-4 w-[59%] md:w-full">
                                        <div className="flex flex-row items-start justify-end w-[79%] md:w-full">
                                          <Text
                                            className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                            size="txtInterRegular32"
                                          >
                                            9.8
                                          </Text>
                                          <Img
                                            className="h-2.5 ml-0.5 w-2.5"
                                            src="images/img_image_gray_400.svg"
                                            alt="image"
                                          />
                                        </div>
                                        <Text
                                          className="mt-3 text-light_blue-900 text-sm"
                                          size="txtInterRegular14Lightblue900"
                                        >
                                          Exceptional
                                        </Text>
                                        <Img
                                          className="h-[11px] mt-2"
                                          src="images/img_image_amber_500.svg"
                                          alt="image_One"
                                        />
                                      </div>
                                    </div>
                                    <Button
                                      className="cursor-pointer min-w-[232px] text-base text-center"
                                      shape="round"
                                      size="md"
                                    >
                                      View
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center left-[2%] min-w-[136px] ml-4 rounded-br-lg rounded-tr-lg top-[0]"
                                leftIcon={
                                  <Img
                                    className="h-5 mt-px mr-2 top-[0] right-[1%] absolute"
                                    src="images/img_image_white_a700.svg"
                                    alt="IMAGE"
                                  />
                                }
                                color="yellow_900"
                              >
                                <div className="text-base text-left">
                                  Best Choice
                                </div>
                              </Button>
                              <Text
                                className="absolute bg-white-A700 flex h-11 items-center justify-center left-[0] rounded-[50%] text-blue_gray-600 text-center text-xl top-[17%] w-11"
                                size="txtInterRegular20"
                              >
                                1
                              </Text>
                            </div>
                            <div className="sm:h-[254px] h-[270px] md:h-[630px] relative w-full">
                              <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-2.5 px-2.5 rounded-[12px] w-[98%]">
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                                  <div className="flex flex-col gap-[27px] justify-start w-[15%] md:w-full">
                                    <Img
                                      className="h-[103px] md:h-auto object-cover w-full"
                                      src="images/img_download1.png"
                                      alt="downloadSeven"
                                    />
                                    <Text
                                      className="md:ml-[0] ml-[41px] text-blue_gray-600 text-center text-sm"
                                      size="txtInterRegular14Bluegray600"
                                    >
                                      Biulder
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[58px] w-[53%] md:w-full">
                                    <Text
                                      className="leading-[24.00px] ml-0.5 md:ml-[0] text-base text-blue_gray-700 w-full"
                                      size="txtInterRegular16"
                                    >
                                      SiteCraft 68-Inch Ultimate Web Design
                                      Studio- Advanced Site Creation Toolkit,
                                      Intuitive Drag-and-Drop Editor for Dynamic
                                      Websites and E-commerce Platforms
                                      (Green/White)
                                    </Text>
                                    <Text
                                      className="mt-2.5 text-base text-blue_gray-800"
                                      size="txtInterBold16"
                                    >
                                      Main highlights
                                    </Text>
                                    <Text
                                      className="leading-[24.00px] md:ml-[0] ml-[22px] mt-[11px] text-base text-blue_gray-700 w-[95%] sm:w-full"
                                      size="txtInterRegular16"
                                    >
                                      [What You Get]: Gain access to the
                                      SiteCraft design studio, featuring a
                                      robust selection of design elements, SEO
                                      optimization tools, and e-commerce
                                      integrations.
                                    </Text>
                                    <SelectBox
                                      className="md:ml-[0] ml-[7px] mt-[17px] text-base text-blue-500 text-left w-[21%] sm:w-full"
                                      placeholderClassName="text-blue-500"
                                      indicator={
                                        <Img
                                          className="h-4 mr-[0] w-4"
                                          src="images/img_arrowdown.svg"
                                          alt="arrow_down"
                                        />
                                      }
                                      isMulti={false}
                                      name="groupFiftyFive"
                                      options={showMoreOptionsList1}
                                      isSearchable={false}
                                      placeholder="Show more"
                                    />
                                  </div>
                                  <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start mb-1.5 ml-6 md:ml-[0] w-1/4 md:w-full">
                                    <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[3px] rounded-bl-[12px] rounded-br-[12px] w-[59%] md:w-full">
                                      <div className="flex flex-col gap-[13px] items-end justify-start mb-[15px] w-[53%] md:w-full">
                                        <div className="flex flex-row items-start justify-evenly w-[89%] md:w-full">
                                          <Text
                                            className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                            size="txtInterRegular32"
                                          >
                                            9.5
                                          </Text>
                                          <Img
                                            className="h-2.5 w-2.5"
                                            src="images/img_image_gray_400.svg"
                                            alt="image"
                                          />
                                        </div>
                                        <div className="flex flex-col gap-[9px] items-center justify-start mr-0.5 w-[98%] md:w-full">
                                          <Text
                                            className="text-light_blue-900 text-sm"
                                            size="txtInterRegular14Lightblue900"
                                          >
                                            Excellent
                                          </Text>
                                          <Img
                                            className="h-[11px]"
                                            src="images/img_image_amber_500_11x66.svg"
                                            alt="image_One"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <Button
                                      className="cursor-pointer min-w-[232px] text-base text-center"
                                      shape="round"
                                      size="md"
                                    >
                                      View
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center left-[2%] min-w-[125px] ml-4 rounded-br-lg rounded-tr-lg top-[0]"
                                leftIcon={
                                  <Img
                                    className="h-5 mt-px mr-2 top-[0] right-[1%] absolute"
                                    src="images/img_settings.svg"
                                    alt="settings"
                                  />
                                }
                                color="yellow_900"
                              >
                                <div className="text-base text-left">
                                  Best Value
                                </div>
                              </Button>
                              <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col h-11 items-center justify-start left-[0] rounded-[50%] top-[17%] w-11">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-11 items-center justify-start p-[9px] rounded-[50%] w-11">
                                  <Text
                                    className="text-blue_gray-600 text-xl"
                                    size="txtInterRegular20"
                                  >
                                    2
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                          <Img
                            className="h-2.5 md:ml-[0] ml-[930px] mt-6 w-2.5"
                            src="images/img_image_gray_400.svg"
                            alt="image_One"
                          />
                          <div className="h-[255px] sm:h-[258px] md:h-[619px] mt-1 relative w-[98%] md:w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[7px] px-[7px] rounded-[12px] w-[98%]">
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                                <div className="flex flex-col gap-3 items-center justify-start md:mt-0 mt-[75px] w-[15%] md:w-full">
                                  <Img
                                    className="h-[103px] md:h-auto object-cover w-full"
                                    src="images/img_download1.png"
                                    alt="downloadSix"
                                  />
                                  <Text
                                    className="text-[13px] text-blue_gray-600 text-center"
                                    size="txtInterRegular13Bluegray600"
                                  >
                                    Builder 1
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[58px] md:mt-0 mt-[21px]">
                                  <Text
                                    className="leading-[24.00px] text-base text-blue_gray-700 w-[98%] sm:w-full"
                                    size="txtInterRegular16"
                                  >
                                    WixPro 72-Inch Responsive Website Builder-
                                    Comprehensive Digital Platform Creation
                                    Tool, Streamlined Design Interface for
                                    Professional Websites and Online Stores
                                    (Black/Blue)
                                  </Text>
                                  <Text
                                    className="mt-[7px] text-base text-blue_gray-800"
                                    size="txtInterBold16"
                                  >
                                    Main highlights
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] md:ml-[0] ml-[18px] mt-2 text-base text-blue_gray-700 w-[97%] sm:w-full"
                                    size="txtInterRegular16"
                                  >
                                    [What You Get]: Receive the WixPro website
                                    builder suite, access to premium design
                                    templates, an extensive library of widgets
                                    and apps, and detailed step-by-step guides.
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-base text-blue-500"
                                    size="txtInterRegular16Blue500"
                                  >
                                    Show more
                                  </Text>
                                </div>
                                <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start mb-[9px] md:ml-[0] ml-[25px] w-1/4 md:w-full">
                                  <div className="bg-gray-50_01 flex flex-col items-center justify-start p-2.5 rounded-bl-[12px] rounded-br-[12px] w-[59%] md:w-full">
                                    <Text
                                      className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                      size="txtInterRegular32"
                                    >
                                      9.3
                                    </Text>
                                    <Text
                                      className="mt-3 text-light_blue-900 text-sm"
                                      size="txtInterRegular14Lightblue900"
                                    >
                                      Exceptional
                                    </Text>
                                    <Img
                                      className="h-[11px] my-2"
                                      src="images/img_image_amber_500.svg"
                                      alt="One"
                                    />
                                  </div>
                                  <Button
                                    className="cursor-pointer min-w-[232px] text-base text-center"
                                    shape="round"
                                    size="md"
                                  >
                                    View
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute bg-white-A700 border border-gray-300 border-solid flex h-11 items-center justify-center left-[0] rounded-[50%] text-blue_gray-600 text-center text-xl top-[11%] w-11"
                              size="txtInterRegular20"
                            >
                              3
                            </Text>
                          </div>
                          <div className="h-[436px] sm:h-[566px] md:h-[911px] mr-[18px] mt-[41px] relative w-[99%] md:w-full">
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[12px] w-[98%]">
                              <div className="flex flex-col gap-[5px] justify-start mb-[15px] w-[97%] md:w-full">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[50px] w-[95%] md:w-full">
                                  <div className="flex flex-col gap-[42px] items-center justify-start md:mt-0 mt-[98px] w-[16%] md:w-full">
                                    <Img
                                      className="h-[103px] md:h-auto object-cover w-full"
                                      src="images/img_download1.png"
                                      alt="downloadTwo"
                                    />
                                    <Text
                                      className="text-blue_gray-600 text-center text-sm"
                                      size="txtInterRegular14Bluegray600"
                                    >
                                      CDK
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start mb-[13px] md:ml-[0] ml-[50px] md:mt-0 mt-[22px] w-[58%] md:w-full">
                                    <Text
                                      className="leading-[24.00px] text-base text-blue_gray-700 w-[96%] sm:w-full"
                                      size="txtInterRegular16"
                                    >
                                      CDK Resposive Builder: An extensive
                                      library of widgets and apps, and detailed
                                      step-by-step guides
                                    </Text>
                                    <Text
                                      className="bg-gray-100 h-[26px] justify-center mt-[9px] pb-[7px] pt-0.5 px-[5px] rounded text-[13px] text-light_blue-900 w-[61px]"
                                      size="txtInterRegular13Lightblue900"
                                    >
                                      26% Off
                                    </Text>
                                    <Text
                                      className="ml-1 md:ml-[0] text-base text-blue_gray-800"
                                      size="txtInterBold16"
                                    >
                                      Main highlights
                                    </Text>
                                    <div className="bg-red-50 flex flex-col items-start justify-start md:ml-[0] ml-[22px] mt-1 p-2 rounded-[12px] w-[96%] md:w-full">
                                      <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] w-[39%] md:w-full">
                                        <div className="flex flex-row gap-2 items-center justify-start w-full">
                                          <Button
                                            className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                            color="white_A700"
                                          >
                                            9.9
                                          </Button>
                                          <Text
                                            className="capitalize text-[15px] text-blue_gray-700"
                                            size="txtInterRegular15"
                                          >
                                            building responsive
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-2 items-start justify-start w-[44%] md:w-full">
                                          <Button
                                            className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                            color="white_A700"
                                          >
                                            8.9
                                          </Button>
                                          <Text
                                            className="capitalize mt-[3px] text-base text-blue_gray-700"
                                            size="txtInterRegular16"
                                          >
                                            Cool
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-2 items-start justify-start w-[46%] md:w-full">
                                          <Button
                                            className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                            color="white_A700"
                                          >
                                            8.9
                                          </Button>
                                          <Text
                                            className="capitalize mt-[3px] text-base text-blue_gray-700"
                                            size="txtInterRegular16"
                                          >
                                            Docs
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50_01 flex flex-col gap-4 items-center justify-start mb-[142px] md:ml-[0] ml-[69px] p-[7px] rounded-bl-[12px] rounded-br-[12px] w-[15%] md:w-full">
                                    <Text
                                      className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                      size="txtInterRegular32"
                                    >
                                      9.1
                                    </Text>
                                    <div className="flex flex-col gap-2 items-start justify-start mb-2.5 w-[58%] md:w-full">
                                      <Text
                                        className="text-light_blue-900 text-sm"
                                        size="txtInterRegular14Lightblue900"
                                      >
                                        Very Good
                                      </Text>
                                      <Img
                                        className="h-[11px] ml-1 md:ml-[0]"
                                        src="images/img_image_11x66.svg"
                                        alt="image_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[191px] w-[71%] md:w-full">
                                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                                    <Text
                                      className="text-base text-blue_gray-800"
                                      size="txtInterRegular16Bluegray800"
                                    >
                                      Why we love it
                                    </Text>
                                    <Img
                                      className="h-2.5 mb-0.5 mt-[7px] w-2.5"
                                      src="images/img_image_gray_400_10x10.svg"
                                      alt="image_Four"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-2 items-start justify-start w-[21%] md:w-full">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_image_blue_50.svg"
                                      alt="image_Five"
                                    />
                                    <Text
                                      className="capitalize text-[15px] text-blue_gray-700"
                                      size="txtInterRegular15"
                                    >
                                      Documentation
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[162px] w-[84%] md:w-full">
                                  <div className="flex flex-col gap-[7px] justify-start">
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px] w-4/5 md:w-full">
                                      <div className="flex flex-row gap-2 items-start justify-start w-[90%] md:w-full">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_image_blue_50.svg"
                                          alt="image_Six"
                                        />
                                        <Text
                                          className="capitalize mt-0.5 text-base text-blue_gray-700"
                                          size="txtInterRegular16"
                                        >
                                          Easy Use
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start mt-1 w-full">
                                        <Img
                                          className="h-6 w-6"
                                          src="images/img_image_blue_50.svg"
                                          alt="image_Seven"
                                        />
                                        <Text
                                          className="capitalize text-base text-blue_gray-700"
                                          size="txtInterRegular16"
                                        >
                                          Out of box
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="text-base text-blue-500"
                                      size="txtInterRegular16Blue500"
                                    >
                                      Show more
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer mb-0.5 min-w-[232px] sm:mt-0 mt-[29px] text-base text-center"
                                    shape="round"
                                    size="md"
                                  >
                                    View
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute bg-white-A700 border border-gray-300 border-solid flex h-11 items-center justify-center left-[0] rounded-[50%] text-blue_gray-600 text-center text-xl top-[8%] w-11"
                              size="txtInterRegular20"
                            >
                              4
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[30px] mt-[85px] w-[85%] md:w-full">
                            <Text
                              className="mb-[7px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800"
                              size="txtInterRegular32Bluegray800"
                            >
                              Related deals you might like for
                            </Text>
                            <Img
                              className="h-2.5 sm:mt-0 mt-9 w-2.5"
                              src="images/img_image_gray_400.svg"
                              alt="image_Eight"
                            />
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:ml-[0] ml-[38px] mt-3.5 w-[97%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-[12px] w-full">
                              <div className="flex flex-col gap-[59px] items-center justify-start mt-[17px] w-full">
                                <Img
                                  className="h-[103px] md:h-auto object-cover w-[49%]"
                                  src="images/img_download1.png"
                                  alt="downloadThree"
                                />
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row items-center justify-start w-[62%] md:w-full">
                                    <Button
                                      className="cursor-pointer min-w-[69px] rounded-lg text-[13px] text-center"
                                      color="gray_100"
                                    >
                                      20% Off
                                    </Button>
                                    <Button
                                      className="cursor-pointer min-w-[107px] ml-1 rounded-lg text-center text-sm"
                                      color="gray_100"
                                    >
                                      Limited time{" "}
                                    </Button>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[67px] mt-1.5 text-base text-blue_gray-600"
                                    size="txtInterBold16Bluegray600"
                                  >
                                    Webbuilder 1
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] mt-[9px] text-base text-blue_gray-600 w-[98%] sm:w-full"
                                    size="txtInterRegular16Bluegray600"
                                  >
                                    Computer Modern clasic with wix support
                                  </Text>
                                  <div className="flex flex-row items-end justify-start mt-[7px] w-[69%] md:w-full">
                                    <Text
                                      className="text-blue_gray-600_01 text-xl"
                                      size="txtInterRegular20Bluegray60001"
                                    >
                                      $39.96
                                    </Text>
                                    <Text
                                      className="ml-[13px] mt-2 text-blue_gray-300 text-sm"
                                      size="txtInterRegular14Bluegray300"
                                    >
                                      $49.96
                                    </Text>
                                    <Text
                                      className="ml-3 mt-[9px] text-[13px] text-red-400"
                                      size="txtInterRegular13Red400"
                                    >
                                      (20% Off)
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer min-w-[292px] mt-[13px] text-base text-center"
                                    shape="round"
                                    size="md"
                                  >
                                    View Deal
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-[12px] w-full">
                              <div className="flex flex-col gap-[59px] items-center justify-start mt-[17px] w-full">
                                <Img
                                  className="h-[103px] md:h-auto object-cover w-[49%]"
                                  src="images/img_download1.png"
                                  alt="downloadFour"
                                />
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row items-center justify-start w-[62%] md:w-full">
                                    <Button
                                      className="cursor-pointer min-w-[69px] rounded-lg text-[13px] text-center"
                                      color="gray_100"
                                    >
                                      20% Off
                                    </Button>
                                    <Button
                                      className="cursor-pointer min-w-[107px] ml-1 rounded-lg text-center text-sm"
                                      color="gray_100"
                                    >
                                      Limited time{" "}
                                    </Button>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[67px] mt-1.5 text-base text-blue_gray-600"
                                    size="txtInterBold16Bluegray600"
                                  >
                                    Webbuilder 1
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] mt-[9px] text-base text-blue_gray-600 w-[98%] sm:w-full"
                                    size="txtInterRegular16Bluegray600"
                                  >
                                    Computer Modern clasic with wix support
                                  </Text>
                                  <div className="flex flex-row items-end justify-start mt-[7px] w-[69%] md:w-full">
                                    <Text
                                      className="text-blue_gray-600_01 text-xl"
                                      size="txtInterRegular20Bluegray60001"
                                    >
                                      $39.96
                                    </Text>
                                    <Text
                                      className="ml-[13px] mt-2 text-blue_gray-300 text-sm"
                                      size="txtInterRegular14Bluegray300"
                                    >
                                      $49.96
                                    </Text>
                                    <Text
                                      className="ml-3 mt-[9px] text-[13px] text-red-400"
                                      size="txtInterRegular13Red400"
                                    >
                                      (20% Off)
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer min-w-[292px] mt-[13px] text-base text-center"
                                    shape="round"
                                    size="md"
                                  >
                                    View Deal
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-[12px] w-full">
                              <div className="flex flex-col gap-[59px] items-center justify-start mt-[17px] w-full">
                                <Img
                                  className="h-[103px] md:h-auto object-cover w-[49%]"
                                  src="images/img_download1.png"
                                  alt="downloadFive"
                                />
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-row items-center justify-start w-[62%] md:w-full">
                                    <Button
                                      className="cursor-pointer min-w-[69px] rounded-lg text-[13px] text-center"
                                      color="gray_100"
                                    >
                                      20% Off
                                    </Button>
                                    <Button
                                      className="cursor-pointer min-w-[107px] ml-1 rounded-lg text-center text-sm"
                                      color="gray_100"
                                    >
                                      Limited time{" "}
                                    </Button>
                                  </div>
                                  <Text
                                    className="md:ml-[0] ml-[67px] mt-1.5 text-base text-blue_gray-600"
                                    size="txtInterBold16Bluegray600"
                                  >
                                    Webbuilder 1
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] mt-[9px] text-base text-blue_gray-600 w-[98%] sm:w-full"
                                    size="txtInterRegular16Bluegray600"
                                  >
                                    Computer Modern clasic with wix support
                                  </Text>
                                  <div className="flex flex-row items-end justify-start mt-[7px] w-[69%] md:w-full">
                                    <Text
                                      className="text-blue_gray-600_01 text-xl"
                                      size="txtInterRegular20Bluegray60001"
                                    >
                                      $39.96
                                    </Text>
                                    <Text
                                      className="ml-[13px] mt-2 text-blue_gray-300 text-sm"
                                      size="txtInterRegular14Bluegray300"
                                    >
                                      $49.96
                                    </Text>
                                    <Text
                                      className="ml-3 mt-[9px] text-[13px] text-red-400"
                                      size="txtInterRegular13Red400"
                                    >
                                      (20% Off)
                                    </Text>
                                  </div>
                                  <Button
                                    className="cursor-pointer min-w-[292px] mt-[13px] text-base text-center"
                                    shape="round"
                                    size="md"
                                  >
                                    View Deal
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </List>
                          <Img
                            className="h-2.5 md:ml-[0] ml-[930px] mt-[88px] w-2.5"
                            src="images/img_image_gray_400.svg"
                            alt="image_Nine"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray-50 flex flex-col inset-x-[0] items-center justify-end mx-auto py-2.5 top-[0] w-[65%]">
                    <div className="flex flex-col items-start justify-start mt-[27px] w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-800"
                        size="txtInterRegular48"
                      >
                        Best Website builders in the US
                      </Text>
                      <Line className="bg-gray-300 h-px mt-3 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[9px] w-full">
                        <Img
                          className="h-5 md:mt-0 mt-[5px] w-5"
                          src="images/img_image_blue_gray_600.svg"
                          alt="image_Ten"
                        />
                        <Text
                          className="ml-2 md:ml-[0] md:mt-0 mt-[7px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Last Updated
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] md:mt-0 mt-[7px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          -
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[9px] md:mt-0 mt-2 text-[13px] text-blue_gray-700"
                          size="txtInterRegular13"
                        >
                          February 22, 2020
                        </Text>
                        <Img
                          className="h-5 ml-5 md:ml-[0] md:mt-0 mt-[5px] w-5"
                          src="images/img_image_blue_gray_600_20x20.svg"
                          alt="image_Eleven"
                        />
                        <Text
                          className="ml-2 md:ml-[0] md:mt-0 mt-[7px] text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Advertising Disclosure
                        </Text>
                        <SelectBox
                          className="md:flex-1 md:ml-[0] ml-[462px] text-blue_gray-500 text-center text-sm w-[12%] md:w-full"
                          placeholderClassName="text-blue_gray-500"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_arrowdown_blue_gray_600.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="groupFiftySeven"
                          options={topRelevantOptionsList}
                          isSearchable={false}
                          placeholder="Top Relevant"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[6%] w-[65%]" />
                <div className="absolute bg-gray-50 bottom-[0] flex md:flex-col flex-row md:gap-10 gap-[151px] items-start justify-start p-2.5 right-[16%] w-[65%]">
                  <Text
                    className="leading-[44.00px] mb-10 md:mt-0 mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-600_01 w-2/5 sm:w-full"
                    size="txtInterRegular32Bluegray60001"
                  >
                    Sign up and get exclusive special deals
                  </Text>
                  <div className="bg-white-A700 h-[52px] mb-[68px] md:mt-0 mt-[31px] rounded-bl-[12px] rounded-tl-[12px] w-[35%]"></div>
                  <Button
                    className="cursor-pointer mb-[68px] min-w-[97px] md:mt-0 mt-[31px] rounded-br-[12px] rounded-tr-[12px] text-center text-sm tracking-[0.70px]"
                    size="lg"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <Img
                className="h-2.5 md:ml-[0] ml-[1181px] w-2.5"
                src="images/img_image_gray_400.svg"
                alt="image_Twelve"
              />
            </div>
            <div className="absolute bg-blue_gray-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start mb-[145px] md:ml-[0] ml-[227px] w-[57%] md:w-full">
                <div className="flex flex-row items-center justify-between w-1/2 md:w-full">
                  <Text
                    className="text-base text-white-A700 uppercase"
                    size="txtInterRegular16WhiteA700"
                  >
                    Categories
                  </Text>
                  <Text
                    className="text-base text-white-A700 uppercase"
                    size="txtInterRegular16WhiteA700"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[13px] w-[47%] md:w-full">
                  <Text
                    className="mt-[3px] text-[13px] text-blue_gray-200"
                    size="txtInterRegular13Bluegray200"
                  >
                    Web Builder
                  </Text>
                  <Text
                    className="mb-0.5 text-blue_gray-200 text-sm"
                    size="txtInterRegular14Bluegray200"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-3 w-full">
                  <Text
                    className="mt-[13px] text-[13px] text-blue_gray-200"
                    size="txtInterRegular13Bluegray200"
                  >
                    Hosting
                  </Text>
                  <a
                    href="javascript:"
                    className="my-[5px] text-blue_gray-200 text-sm"
                  >
                    <Text size="txtInterRegular14Bluegray200">
                      Privacy Policy
                    </Text>
                  </a>
                  <SelectBox
                    className="sm:flex-1 text-[13px] text-blue_gray-100 text-left w-[14%] sm:w-full"
                    placeholderClassName="text-blue_gray-100"
                    indicator={
                      <Img
                        className="h-[9px] mr-[0] w-[15px]"
                        src="images/img_arrowdown_gray_300.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupFiftyEight"
                    options={unitedStatesOptionsList}
                    isSearchable={false}
                    placeholder="United States"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-2.5 w-[54%] md:w-full">
                  <Text
                    className="mt-[11px] text-blue_gray-200 text-sm"
                    size="txtInterRegular14Bluegray200"
                  >
                    Data Center
                  </Text>
                  <a
                    href="javascript:"
                    className="mb-[11px] text-blue_gray-200 text-sm"
                  >
                    <Text size="txtInterRegular14Bluegray200">
                      Terms Of Service
                    </Text>
                  </a>
                </div>
                <div className="flex flex-row items-start justify-between mt-2.5 w-[49%] md:w-full">
                  <Text
                    className="mt-[13px] text-[13px] text-blue_gray-200"
                    size="txtInterRegular13Bluegray200"
                  >
                    Robotic-Automation
                  </Text>
                  <Text
                    className="mb-[13px] text-[13px] text-blue_gray-200"
                    size="txtInterRegular13Bluegray200"
                  >
                    Categories
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[341px] mt-1 text-blue_gray-200 text-sm"
                  size="txtInterRegular14Bluegray200"
                >
                  About
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-[1603px] mx-auto md:px-5 px-[400px] w-full">
          <Img
            className="h-2.5 w-2.5"
            src="images/img_image_gray_400.svg"
            alt="image_Thirteen"
          />
        </div>
      </div>
    </>
  );
};

export default FramePage;
