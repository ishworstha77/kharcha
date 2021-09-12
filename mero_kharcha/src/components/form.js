import { Form, Button, Container, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import Cards from "./Cards";

const getLocalItem = () => {
  return JSON.parse(localStorage.getItem("items"));
};

const initItem = { title: "", amount: "", detail: "", category: "" };
const dataFromLocalStorage = getLocalItem() ?? [];

const CustomForm = () => {
  const [item, setItem] = useState(initItem);

  const [info, setInfo] = useState(dataFromLocalStorage);
  console.log(info);

  const Submitting = (e) => {
    e.preventDefault();
    if (!item.title || !item.amount || !item.detail || !item.category) {
      // alert("Enter Something");
    } else {
      const _info = [...info, item];
      setInfo(_info);

      setItem(initItem);

      localStorage.setItem("items", JSON.stringify(_info));
    }
  };

  // useEffect(() => {
  //   const localItem = getLocalItem();
  //   console.log("localItem", localItem);
  //   setItem("");
  // }, []);

  const current = new Date();
  const shortMonth = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = `${current.getDate()} ${
    shortMonth[current.getMonth()]
  },${current.getFullYear()}`;

  const handle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // const { name, value } = e.target;
    const previousItems = item;
    const newItems = { ...previousItems, [name]: value, date: date };
    setItem(newItems);
  };

  const deleteCard = (id) => {
    const updatedata = info.filter((cur, index) => {
      return id !== index;
    });
    // alert("id", id);

    setInfo(updatedata);
    localStorage.setItem("items", JSON.stringify(updatedata));
  };
  console.log(deleteCard);

  return (
    <>
      <Container>
        <div>
          <p> {date}</p>
        </div>
        <hr />

        <Form onSubmit={Submitting}>
          <Row>
            <Col>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    onChange={handle}
                    autoComplete="off"
                    value={item.title}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Amount"
                    name="amount"
                    onChange={handle}
                    value={item.amount}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>select Category</Form.Label>

                  <select
                    placeholder="select category"
                    name="category"
                    onChange={handle}
                    value={item.category}
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected></option>
                    <option value="trasportation">Transportation</option>
                    <option value="food">Food</option>
                    <option value="chothes">Clothes</option>
                    <option value="share">Share</option>
                  </select>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write your message here"
                      name="detail"
                      onChange={handle}
                      value={item.detail}
                    />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Col>

            <Col xs={6}>
              <div>
                <ul>
                  {info.map((information, index) => (
                    <Col>
                      <Cards
                        title={information.title}
                        amount={information.amount}
                        date={information.date}
                        detail={information.detail}
                        category={information.category}
                        onDeleteBtnClicked={() => deleteCard(index)}
                      />
                    </Col>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default CustomForm;
