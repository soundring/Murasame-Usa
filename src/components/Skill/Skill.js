import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const SkillDiv = styled("div")`
  color: #fff;
  padding-bottom: 30px;
`;

const SkillTitle = styled(Typography)`
  && {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
  }
`;

const TableDiv = styled(Paper)`
  && {
    width: 50%;
    margin: 0 auto;
    margin-top: 30px;
  }
`;

const FixTableCell = styled(TableCell)`
  && {
    width: 50%;
    text-align: center;
    font-size: 20px;
  }
`;

class Skill extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let id = 0;
    function createData(name, year) {
      id += 1;
      return { id, name, year };
    }

    const rows = [
      createData("HTML5", 1),
      createData("CSS3", 1),
      createData("Javascript", 1),
      createData("React", 0.2),
      createData("React Static", 0.1),
      createData("Ruby", 0.5),
      createData("Rails", 0.5)
    ];

    return (
      <SkillDiv>
        <SkillTitle>Skill</SkillTitle>
        <TableDiv>
          <Table>
            <TableHead>
              <TableRow>
                <FixTableCell>言語・フレームワーク</FixTableCell>
                <FixTableCell numeric>期間(年)</FixTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <FixTableCell component="th" scope="row">
                      {row.name}
                    </FixTableCell>
                    <FixTableCell numeric>{row.year}</FixTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableDiv>
      </SkillDiv>
    );
  }
}

export default Skill;
