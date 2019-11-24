import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import SingleItem from "../components/SingleItem";

const fakeItem = {
  id: "ABC123",
  title: "A Cool Item",
  price: 4000,
  description: "This item is really cool!",
  image: "dog.jpg",
  largeImage: "largedog.jpg",
};

describe("<SingleItem />", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<SingleItem {...fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // it("renders the image properly", () => {
  //   const wrapper = shallow(<SingleItem {...fakeItem} />);
  //   const img = wrapper.find("img");
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);

  //   // console.log(wrapper.debug());
  // });

  // it("renders the pricetag and title", () => {
  //   const wrapper = shallow(<SingleItem {...fakeItem} />);

  //   const PriceTag = wrapper.find("dt");
  //   expect(PriceTag.children().text()).toBe("$40.00");

  //   const Title = wrapper.find("h3");
  //   expect(Title.children().text()).toBe(fakeItem.title);

  //   // console.log(wrapper.debug());
  // });
});
