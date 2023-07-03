import React from "react";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function BabyCard() {
  const { baby } = useSelector((state) => state.MotherSlice);
  const [vaccines, setVaccines] = useState([
    { name: 'الجدري', date: '1/07/2023', checked: false },
    { name: 'التهاب الكبد الوبائي', date: '15/08/2023', checked: false }
  ]);

  const handleCheckboxChange = (index) => {
    const updatedVaccines = [...vaccines];
    updatedVaccines[index].checked = !updatedVaccines[index].checked;
    setVaccines(updatedVaccines);
  };

  return (
    <Accordion className="my-5 mx-5">
      {baby &&
        baby.map((single, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{single.name}</Accordion.Header>
              <Accordion.Body>
                <table className="table text-center">
                  <thead>
                    <tr className="table-primary">
                      <th>حجم الرأس</th>
                      <th>الطول</th>
                      <th>درجة الحرارة</th>
                      <th>الوزن</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td>{single.headSize}</td>
                      <td>{single.height}</td>
                      <td>{single.temperature}</td>
                      <td>{single.weight}</td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="table-success">
                        التطعيمات
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2}>نوع التطعيم</th>
                      <th>التاريخ</th>
                      <th>الحاله</th>
                    </tr>
                    <tr className={vaccines[0].checked?"table-info":""}>
                      <td colSpan={2}>{vaccines[0].name}</td>
                      <td>{vaccines[0].date}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={vaccines[0].checked}
                          name="vaccine1"
                          disabled={vaccines[0].checked}
                          id={`vaccine${index}`}
                          onChange={()=> {
                            handleCheckboxChange(0);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className={vaccines[1].checked?"table-info":""}>
                      <td colSpan={2}>{vaccines[1].name}</td>
                      <td>{vaccines[1].date}</td>
                      <td>
                        <input
                        checked={vaccines[1].checked}
                        disabled={vaccines[1].checked}
                          type="checkbox"
                          name="vaccine1"
                          id={`vaccine${index}`}
                          onChange={()=> {
                            handleCheckboxChange(1);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
    </Accordion>
  );
}
