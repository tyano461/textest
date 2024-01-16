#import <React/RCTUtils.h>
#import "RCTPDFModule.h"
#import "PDFView.h"
#import <MapKit/MapKit.h>

extern int dllluatexmain(int argc, char *argv[]);

int _convert(char* path) {
    char *com = "lualatex";
    char *arg1 = "--interaction=nonstopmode";
    char *argv[4] = {NULL};

    argv[0] = com;
    argv[1] = arg1;
    argv[2] = path;

    return dllluatexmain(3, argv);
}

@implementation RCTPDFModule

RCT_EXPORT_MODULE()

// RCT_EXPORT_VIEW_PROPERTY(fname, NSString*)

RCT_EXPORT_METHOD(convert:(NSString*)filepath callback:(RCTResponseSenderBlock)callback) {
    char *path;
    int result;

    NSLog(@"RCT convert IN");

    path = (char*)[filepath UTF8String];
    result = _convert(path);
    NSString *sret = [[NSString alloc] initWithFormat:@"ret:%d", result];
    callback(@[sret]);
}

- (UIView *)view
{
  NSLog(@"aiueo");
  return [[MKMapView alloc] init];
}

@end
