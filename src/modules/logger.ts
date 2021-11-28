import rTracer from "cls-rtracer";
import { dailyfile } from "tracer";
const rootFolder = "./logs";
const logFormat = "{{timestamp}} <{{title}}> ({{file}}:{{line}}) {{message}}";
const logDateformat = "yyyy-mm-dd HH:MM:ss";

const logger_info = dailyfile({
  root: rootFolder,
  allLogsFileName: "info",
  stackIndex: 1,
  level: "info",
  format: logFormat,
  dateformat: logDateformat,
});

const logger_error = dailyfile({
  root: rootFolder,
  allLogsFileName: "error",
  stackIndex: 1,
  level: "error",
  format: logFormat,
  dateformat: logDateformat,
});

export const logger = {
  info(...trace: any[]) {
    return logger_info.info(rTracer.id(), ...trace);
  },
  error(...trace: any[]) {
    logger_info.info(rTracer.id(), trace);
    return logger_error.error(rTracer.id(), trace);
  },
};
