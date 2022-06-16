import {
  CalendarMonth,
  AssignmentInd,
  Build,
  Person,
  AccessTimeFilled,
} from "@mui/icons-material";

class Link {
  constructor(name, icon, path) {
    this.name = name;
    this.icon = icon;
    this.path = path;
  }
}

export const links = [
  new Link("SCHEDULE", CalendarMonth, "SCHEDULE"),
  new Link("PROFISSIONALS", AssignmentInd, "PROFISSIONALS"),
  new Link("SERVICES", Build, "SERVICES"),
  new Link("CLIENTS", Person, "CLIENTS"),
  new Link("HISTORY", AccessTimeFilled, "HISTORY"),
];
